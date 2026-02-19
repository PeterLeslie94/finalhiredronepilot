import Link from 'next/link';

export default function CheckEmailPage() {
  return (
    <section className="section bg-background-alt">
      <div className="container max-w-xl">
        <h1 className="text-3xl font-bold text-teal mb-2">Check Your Email</h1>
        <p className="text-text-secondary mb-6">
          If your email is registered, a sign-in link will arrive shortly.
        </p>

        <div className="bg-white rounded-xl border border-border p-5 space-y-4">
          <p className="text-text-secondary text-sm">
            If you do not receive an email:
          </p>
          <ul className="list-disc pl-6 text-sm text-text-secondary space-y-2">
            <li>Check spam/junk folders.</li>
            <li>Request another link from the login page.</li>
            <li>Make sure you entered the correct email address.</li>
          </ul>

          <div className="flex items-center gap-3">
            <Link href="/login" className="btn btn-primary btn-shimmer">
              Back to Login
            </Link>
            <Link href="/" className="text-gold hover:underline text-sm">
              Back to site
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

