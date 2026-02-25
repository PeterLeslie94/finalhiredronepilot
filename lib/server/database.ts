import { Pool, PoolClient, QueryResult, QueryResultRow } from 'pg';

declare global {
  var __marketplaceDbPool: Pool | undefined;
}

function getDatabaseUrl(): string {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error('Missing DATABASE_URL environment variable');
  }
  return url;
}

function getDatabaseSslConfig(): boolean | { rejectUnauthorized: boolean } {
  if (process.env.DB_SSL === 'false') {
    return false;
  }

  return {
    rejectUnauthorized: process.env.DB_SSL_REJECT_UNAUTHORIZED !== 'false',
  };
}

function createPool(): Pool {
  const pool = new Pool({
    connectionString: getDatabaseUrl(),
    max: Number(process.env.DB_POOL_MAX || 10),
    idleTimeoutMillis: Number(process.env.DB_IDLE_TIMEOUT_MS || 10000),
    connectionTimeoutMillis: Number(process.env.DB_CONNECT_TIMEOUT_MS || 5000),
    ssl: getDatabaseSslConfig(),
  });

  return pool;
}

function getPool(): Pool {
  if (!global.__marketplaceDbPool) {
    global.__marketplaceDbPool = createPool();
  }
  return global.__marketplaceDbPool;
}

export async function query<T extends QueryResultRow = QueryResultRow>(
  sql: string,
  params: unknown[] = [],
): Promise<QueryResult<T>> {
  return getPool().query<T>(sql, params);
}

export async function withTransaction<T>(
  fn: (client: PoolClient) => Promise<T>,
): Promise<T> {
  const client = await getPool().connect();
  try {
    await client.query('BEGIN');
    const result = await fn(client);
    await client.query('COMMIT');
    return result;
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
}
