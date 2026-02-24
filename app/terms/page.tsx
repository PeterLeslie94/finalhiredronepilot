import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website Terms | HireDronePilot',
  description:
    'Website terms for HireDronePilot, including links to Marketplace Terms and Drone Pilot Terms.',
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-teal -mt-[120px] pt-[120px] pb-16">
        <div className="container">
          <div className="max-w-3xl pt-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Website Terms</h1>
            <p className="text-white/80 text-lg">Last updated: February 12, 2026</p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-lg prose-teal">
            <p className="lead text-text-secondary text-lg">
              These website terms apply to your use of the HireDronePilot website. HireDronePilot
              operates as an <strong>intro marketplace</strong> and acts as a{' '}
              <strong>facilitator and record keeper only</strong>.
            </p>

            <div className="rounded-xl border border-border bg-background-alt p-5">
              <p className="text-text-secondary m-0">
                If you submit an enquiry, you must also read and accept our{' '}
                <Link href="/marketplace-terms" className="text-gold hover:underline">
                  Marketplace Terms
                </Link>
                . If you apply to join as a drone pilot, you must also read and accept our{' '}
                <Link href="/pilot-terms" className="text-gold hover:underline">
                  Drone Pilot Terms
                </Link>
                .
              </p>
            </div>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">1. Platform Role</h2>
            <p className="text-text-secondary mb-4">
              HireDronePilot introduces clients to <strong>independent drone pilots</strong>. We do
              not provide drone services ourselves, we are not the service provider, and we are not
              a party to drone pilot-client service contracts.
            </p>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">
              2. Website Use and Accountability
            </h2>
            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Use the website lawfully and provide accurate information.</li>
              <li>Do not attempt unauthorised access to systems or data.</li>
              <li>Do not submit abusive, fraudulent, or misleading content.</li>
            </ul>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">
              3. Limits on Checks and Guarantees
            </h2>
            <p className="text-text-secondary mb-4">
              Where checks are performed, they are <strong>basic document checks</strong> only. We
              do not verify authenticity of uploaded documents and do not guarantee drone pilot
              performance or outcomes.
            </p>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">
              4. Limitation of Responsibility
            </h2>
            <p className="text-text-secondary mb-6">
              We are responsible for operating the marketplace workflow and records. We are not
              responsible for field delivery, workmanship, safety execution, legal permissions,
              insurance validity, deadlines, payment outcomes, or disputes between clients and
              independent drone pilots.
            </p>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">5. Related Policies</h2>
            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>
                <Link href="/privacy" className="text-gold hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/marketplace-terms" className="text-gold hover:underline">
                  Marketplace Terms
                </Link>
              </li>
              <li>
                <Link href="/pilot-terms" className="text-gold hover:underline">
                  Drone Pilot Terms
                </Link>
              </li>
              <li>
                <Link href="/marketplace-policy" className="text-gold hover:underline">
                  Marketplace Issue Policy
                </Link>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">6. Contact</h2>
            <div className="bg-background-alt p-6 rounded-lg">
              <p className="text-text-secondary mb-2">
                <strong className="text-teal">Email:</strong>{' '}
                <a href="mailto:quotes@hiredronepilot.uk" className="text-gold hover:underline">
                  quotes@hiredronepilot.uk
                </a>
              </p>
              <p className="text-text-secondary mb-2">
                <strong className="text-teal">Phone:</strong>{' '}
                <a href="tel:+441334804554" className="text-gold hover:underline">
                  +44 1334 804554
                </a>
              </p>
              <p className="text-text-secondary">
                <strong className="text-teal">Address:</strong> Castlecroft Business Centre, Tom
                Johnston Road, Dundee DD4 8XD
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
