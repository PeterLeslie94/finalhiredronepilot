import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marketplace Terms | HireDronePilot',
  description:
    'Marketplace terms for clients using HireDronePilot to connect with independent drone pilots.',
};

export default function MarketplaceTermsPage() {
  return (
    <>
      <section className="bg-teal -mt-[120px] pt-[120px] pb-16">
        <div className="container">
          <div className="max-w-3xl pt-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Marketplace Terms</h1>
            <p className="text-white/80 text-lg">Last updated: February 12, 2026</p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-lg prose-teal">
            <p className="lead text-text-secondary text-lg">
              These terms apply to clients using the quote and enquiry workflow on
              HireDronePilot.
            </p>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">1. Service Model</h2>
            <p className="text-text-secondary mb-4">
              HireDronePilot is an <strong>intro marketplace</strong>. We connect clients with{' '}
              <strong>independent drone pilots</strong> and act as a{' '}
              <strong>facilitator and record keeper only</strong>.
            </p>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">
              2. Contract Formation and Service Delivery
            </h2>
            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Any service contract is directly between client and drone pilot.</li>
              <li>HireDronePilot is not the provider of the drone service.</li>
              <li>HireDronePilot is not a party to the service contract.</li>
            </ul>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">
              3. Checks, Verification, and Guarantees
            </h2>
            <p className="text-text-secondary mb-4">
              We may perform <strong>basic document checks</strong> only. We do not verify
              authenticity of uploaded documents and do not guarantee drone pilot suitability,
              performance, availability, legal compliance, quality of work, or outcomes.
            </p>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">
              4. Liability and Risk Allocation
            </h2>
            <p className="text-text-secondary mb-6">
              Clients are responsible for selecting and contracting with a drone pilot. Drone pilots
              are solely responsible for service delivery, safety controls, legal permissions,
              insurance validity, RAMS, and final outputs.
            </p>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">5. Dispute Handling</h2>
            <p className="text-text-secondary mb-6">
              In disputes, our role is limited to recording available workflow records and signposting
              parties to direct resolution. We do not adjudicate workmanship, liability allocation, or
              payment outcomes.
            </p>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">6. Data Sharing</h2>
            <p className="text-text-secondary mb-6">
              By submitting an enquiry you consent to sharing relevant enquiry details with selected
              independent drone pilots after admin review. Full details are in our Privacy Policy.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
