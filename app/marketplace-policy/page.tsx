import type { Metadata } from 'next';

type PolicyItem = {
  title: string;
  platformAction: string;
  platformNonAction: string;
  suspensionRule: string;
  evidenceRetention: string;
};

const policyItems: PolicyItem[] = [
  {
    title: 'No-Show',
    platformAction:
      'Record complaint details, keep workflow records, and signpost direct resolution between client and independent drone pilot.',
    platformNonAction:
      'No adjudication of compensation, liability, or completion outcomes.',
    suspensionRule:
      'Pattern no-show complaints may trigger temporary invite suspension pending review.',
    evidenceRetention:
      'Complaint record, timestamps, and platform communications retained for up to 24 months.',
  },
  {
    title: 'Poor Work Quality',
    platformAction:
      'Log issue details and signpost parties to contract-based resolution outside the platform.',
    platformNonAction:
      'No technical determination of workmanship quality or contractual remedy.',
    suspensionRule:
      'Repeated credible complaints may trigger temporary invite suspension while records are reviewed.',
    evidenceRetention:
      'Submitted evidence and complaint records retained for up to 24 months.',
  },
  {
    title: 'Safety/Compliance Complaint',
    platformAction:
      'Record allegation, preserve available records, and request supporting evidence.',
    platformNonAction:
      'No regulatory ruling or legal finding by HireDronePilot.',
    suspensionRule:
      'Credible safety/compliance allegations can trigger immediate temporary invite suspension.',
    evidenceRetention:
      'Safety-related records retained for up to 36 months.',
  },
  {
    title: 'Payment Dispute',
    platformAction:
      'Record dispute metadata and signpost direct resolution between contracting parties.',
    platformNonAction:
      'No adjudication of invoices, payment timelines, or refund obligations.',
    suspensionRule:
      'Not automatic; escalation only for repeated abuse or fraud indicators.',
    evidenceRetention:
      'Payment dispute records retained for up to 24 months.',
  },
  {
    title: 'Communication Abuse',
    platformAction:
      'Record incident, preserve communication logs where available, and apply platform conduct policy.',
    platformNonAction:
      'No legal determination beyond platform moderation actions.',
    suspensionRule:
      'Immediate temporary restriction or suspension may apply for credible abuse.',
    evidenceRetention:
      'Incident records retained for up to 24 months.',
  },
  {
    title: 'Data/Privacy Complaint',
    platformAction:
      'Record complaint, investigate handling against policy, and respond with findings and next steps.',
    platformNonAction:
      'No legal advice or representation.',
    suspensionRule:
      'Processing restrictions may be applied while investigation is active.',
    evidenceRetention:
      'Privacy complaint records retained for up to 36 months.',
  },
];

export const metadata: Metadata = {
  title: 'Marketplace Issue Policy | HireDronePilot',
  description:
    'Issue handling policy for marketplace complaints and disputes on HireDronePilot.',
};

export default function MarketplacePolicyPage() {
  return (
    <>
      <section className="bg-teal -mt-[120px] pt-[120px] pb-16">
        <div className="container">
          <div className="max-w-3xl pt-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Marketplace Issue Policy
            </h1>
            <p className="text-white/80 text-lg">Last updated: February 12, 2026</p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-text-secondary text-lg">
              HireDronePilot is an <strong>intro marketplace</strong> and acts as a{' '}
              <strong>facilitator and record keeper only</strong>. For service disputes between
              clients and independent drone pilots, our role is to record and signpost. We are not a
              party to service contracts and do not adjudicate workmanship or payment outcomes.
            </p>

            {policyItems.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-border bg-background-alt p-6 space-y-3"
              >
                <h2 className="text-2xl font-bold text-teal">{item.title}</h2>
                <p className="text-text-secondary">
                  <strong>Platform action:</strong> {item.platformAction}
                </p>
                <p className="text-text-secondary">
                  <strong>Platform non-action:</strong> {item.platformNonAction}
                </p>
                <p className="text-text-secondary">
                  <strong>Suspension rule:</strong> {item.suspensionRule}
                </p>
                <p className="text-text-secondary">
                  <strong>Evidence handling and retention:</strong> {item.evidenceRetention}
                </p>
              </article>
            ))}

            <div className="bg-background-alt p-6 rounded-2xl border border-border">
              <h2 className="text-2xl font-bold text-teal mb-4">Contact</h2>
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
