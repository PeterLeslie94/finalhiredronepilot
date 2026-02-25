export function getDatabaseSslConfig() {
  if (process.env.DB_SSL === 'false') {
    return false;
  }

  return {
    rejectUnauthorized: process.env.DB_SSL_REJECT_UNAUTHORIZED !== 'false',
  };
}
