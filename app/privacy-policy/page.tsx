import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | HireDronePilot',
  description:
    'Privacy policy for HireDronePilot, including data sharing with independent drone pilots.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-teal -mt-[120px] pt-[120px] pb-16">
        <div className="container">
          <div className="max-w-3xl pt-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-white/80 text-lg">Last updated: February 12, 2026</p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-lg prose-teal">
            <p className="lead text-text-secondary text-lg">
              This policy explains how HireDronePilot collects, uses, and shares personal data for
              our intro marketplace workflows.
            </p>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">1. Who We Are</h2>
            <p className="text-text-secondary mb-6">
              HireDronePilot is operated by Skykam LTD (Company No: SC662275), registered in
              Scotland, with address at Castlecroft Business Centre, Tom Johnston Road, Dundee DD4
              8XD.
            </p>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">2. Data We Collect</h2>
            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Contact details (name, email, phone).</li>
              <li>Enquiry details (service type, timing, location text, postcode, job details).</li>
              <li>
                Drone pilot application details (business details, licence entries, IDs, insurance
                fields, profile image, summary).
              </li>
              <li>Technical usage data (IP, browser/device metadata, page interactions).</li>
            </ul>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">3. Why We Process Data</h2>
            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>To run enquiry routing for independent drone pilots.</li>
              <li>To operate onboarding workflows for independent drone pilots.</li>
              <li>To maintain records, audit trails, and platform security.</li>
              <li>To respond to support, safety, and privacy requests.</li>
            </ul>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">
              4. Data Sharing in Marketplace Workflows
            </h2>
            <p className="text-text-secondary mb-4">
              HireDronePilot is an intro marketplace and acts as a facilitator and record keeper
              only. We share relevant enquiry information with selected independent drone pilots to
              enable quote responses.
            </p>

            <h3 className="text-xl font-semibold text-teal-dark mt-6 mb-3">What We Share</h3>
            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Name, email, and phone.</li>
              <li>Service request, date preference, and location/postcode details.</li>
              <li>Job description and operational constraints included in the enquiry.</li>
              <li>Your enquiry details shared with invited drone pilots after admin review.</li>
            </ul>

            <h3 className="text-xl font-semibold text-teal-dark mt-6 mb-3">When We Share</h3>
            <p className="text-text-secondary mb-6">
              We share data after admin review and approval of an enquiry, and when invites are sent
              to selected independent drone pilots.
            </p>

            <h3 className="text-xl font-semibold text-teal-dark mt-6 mb-3">Who Receives It</h3>
            <p className="text-text-secondary mb-6">
              Selected independent drone pilots who are invited to quote for the enquiry, plus
              necessary infrastructure providers that support secure service delivery.
            </p>

            <h3 className="text-xl font-semibold text-teal-dark mt-6 mb-3">Why We Share</h3>
            <p className="text-text-secondary mb-6">
              Data is shared so invited independent drone pilots can assess scope, availability, and
              pricing and provide a direct quote.
            </p>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">5. Retention Windows</h2>
            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Enquiry and workflow records: up to 24 months from closure.</li>
              <li>Drone pilot application records: up to 24 months after final status decision.</li>
              <li>Safety/compliance complaint records: up to 36 months.</li>
              <li>Core financial/accounting records: up to 7 years where legally required.</li>
            </ul>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">6. Legal Basis</h2>
            <p className="text-text-secondary mb-6">
              We process personal data under legitimate interests, contractual necessity,
              legal-obligation requirements, and consent where required by workflow.
            </p>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">7. Your Rights</h2>
            <p className="text-text-secondary mb-4">
              Subject to applicable law, you may request access, correction, deletion, restriction,
              portability, and objection for relevant personal data.
            </p>
            <p className="text-text-secondary mb-6">
              To submit a request, contact{' '}
              <a href="mailto:quotes@hiredronepilot.uk" className="text-gold hover:underline">
                quotes@hiredronepilot.uk
              </a>
              .
            </p>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">8. Contact and Complaints</h2>
            <p className="text-text-secondary mb-2">
              Email:{' '}
              <a href="mailto:quotes@hiredronepilot.uk" className="text-gold hover:underline">
                quotes@hiredronepilot.uk
              </a>
            </p>
            <p className="text-text-secondary mb-2">Phone: +44 1334 804554</p>
            <p className="text-text-secondary mb-6">
              You can also complain to the UK Information Commissioner&apos;s Office (ICO).
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
