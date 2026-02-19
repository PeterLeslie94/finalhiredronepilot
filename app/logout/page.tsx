'use client';

import { useEffect } from 'react';

export default function LogoutPage() {
  useEffect(() => {
    const run = async () => {
      try {
        await fetch('/api/auth/logout/', { method: 'POST' });
      } finally {
        window.location.href = '/login';
      }
    };
    void run();
  }, []);

  return (
    <section className="section bg-background-alt">
      <div className="container max-w-xl">
        <p className="text-text-secondary">Signing out...</p>
      </div>
    </section>
  );
}

