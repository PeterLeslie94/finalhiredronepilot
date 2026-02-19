import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drone Pilot Terms | HireDronePilot',
  description:
    'Drone pilot terms for independent drone pilots using HireDronePilot marketplace workflows.',
};

export default function PilotTermsPage() {
  return (
    <>
      <section className="bg-teal -mt-[120px] pt-[120px] pb-16">
        <div className="container">
          <div className="max-w-3xl pt-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Drone Pilot Terms</h1>
            <p className="text-white/80 text-lg">Last updated: February 12, 2026</p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-lg prose-teal">
            <p className="lead text-text-secondary text-lg">
              These terms apply to <strong>independent drone pilots</strong> who apply to join or
              use HireDronePilot.
            </p>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">
              1. Platform Role and Relationship
            </h2>
            <p className="text-text-secondary mb-6">
              HireDronePilot is an <strong>intro marketplace</strong> and a{' '}
              <strong>facilitator and record keeper only</strong>. Nothing in these terms creates
              employment, agency, partnership, or joint venture between HireDronePilot and an
              independent drone pilot.
            </p>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">
              2. Independent Contractor Status
            </h2>
            <p className="text-text-secondary mb-6">
              Each drone pilot is an independent contractor and contracts directly with clients.
              HireDronePilot is not a party to drone pilot-client contracts.
            </p>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">
              3. Drone Pilot Responsibilities
            </h2>
            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Regulatory compliance and lawful operation.</li>
              <li>Insurance validity and suitability for each job.</li>
              <li>Permissions, flight planning, and RAMS.</li>
              <li>Service delivery standards, timelines, and output quality.</li>
              <li>Accurate information submitted to clients and to HireDronePilot.</li>
            </ul>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">
              4. Document Checks and Verification Limits
            </h2>
            <p className="text-text-secondary mb-6">
              HireDronePilot may perform <strong>basic document checks</strong> only. We do not
              verify authenticity of uploaded documents and do not guarantee drone pilot performance
              or outcomes.
            </p>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">
              5. Liability and Disputes
            </h2>
            <p className="text-text-secondary mb-6">
              HireDronePilot is not liable for drone pilot-client disputes, workmanship claims,
              delays, cancellations, or payment outcomes. Disputes must be resolved directly between
              client and drone pilot.
            </p>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">
              6. Suspension and Removal
            </h2>
            <p className="text-text-secondary mb-6">
              HireDronePilot may suspend invitations, restrict visibility, or remove a profile where
              there are credible safety or compliance concerns, repeated complaints, policy breaches,
              or suspected fraud.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
