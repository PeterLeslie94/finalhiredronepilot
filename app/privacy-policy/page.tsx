import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Skykam Drone Inspections',
  description: 'Privacy Policy for Skykam Drone Inspections (Skykam LTD). Learn how we collect, use, and protect your personal data.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-teal -mt-[120px] pt-[120px] pb-16">
        <div className="container">
          <div className="max-w-3xl pt-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-white/80 text-lg">
              Last updated: January 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-lg prose-teal">
            <p className="lead text-text-secondary text-lg">
              Skykam LTD, trading as Skykam Drone Inspections ("we", "us", or "our"), is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">1. Company Information</h2>
            <p className="text-text-secondary mb-4">
              Skykam LTD is a company registered in Scotland with Company Number SC662275. Our registered address is:
            </p>
            <address className="text-text-secondary not-italic mb-6 bg-background-alt p-4 rounded-lg">
              Castlecroft Business Centre<br />
              Tom Johnston Road<br />
              Dundee DD4 8XD<br />
              United Kingdom
            </address>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold text-teal-dark mt-6 mb-3">Personal Information</h3>
            <p className="text-text-secondary mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Fill out a contact form or request a quote</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact us via email or telephone</li>
              <li>Enter into a contract for our services</li>
            </ul>
            <p className="text-text-secondary mb-4">
              This information may include:
            </p>
            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Name and job title</li>
              <li>Company name</li>
              <li>Email address</li>
              <li>Telephone number</li>
              <li>Postal address</li>
              <li>Project details and requirements</li>
            </ul>

            <h3 className="text-xl font-semibold text-teal-dark mt-6 mb-3">Automatically Collected Information</h3>
            <p className="text-text-secondary mb-4">
              When you visit our website, we may automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website addresses</li>
            </ul>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">3. How We Use Your Information</h2>
            <p className="text-text-secondary mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Respond to your enquiries and provide quotes</li>
              <li>Deliver our drone survey services</li>
              <li>Process payments and manage our contractual relationship</li>
              <li>Send you relevant marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">4. Legal Basis for Processing (GDPR)</h2>
            <p className="text-text-secondary mb-4">
              Under the UK General Data Protection Regulation (UK GDPR), we process your personal data on the following legal bases:
            </p>
            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li><strong>Contract:</strong> Processing necessary for the performance of a contract with you</li>
              <li><strong>Legitimate Interests:</strong> Processing necessary for our legitimate business interests</li>
              <li><strong>Consent:</strong> Where you have given consent for specific processing activities</li>
              <li><strong>Legal Obligation:</strong> Processing necessary to comply with legal requirements</li>
            </ul>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">5. Data Sharing and Disclosure</h2>
            <p className="text-text-secondary mb-4">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Service providers who assist us in operating our business (e.g., cloud hosting, email services)</li>
              <li>Professional advisers such as accountants and lawyers</li>
              <li>Regulatory authorities where required by law</li>
              <li>Subcontractors involved in delivering our services (under appropriate data protection agreements)</li>
            </ul>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">6. Data Security</h2>
            <p className="text-text-secondary mb-6">
              We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. This includes encryption, secure servers, and access controls.
            </p>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">7. Data Retention</h2>
            <p className="text-text-secondary mb-6">
              We retain your personal information for as long as necessary to fulfil the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements. Contract-related data is typically retained for 7 years after the end of our business relationship.
            </p>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">8. Your Rights</h2>
            <p className="text-text-secondary mb-4">
              Under UK GDPR, you have the following rights:
            </p>
            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
              <li><strong>Erasure:</strong> Request deletion of your data in certain circumstances</li>
              <li><strong>Restriction:</strong> Request restriction of processing</li>
              <li><strong>Portability:</strong> Request transfer of your data</li>
              <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent at any time where processing is based on consent</li>
            </ul>
            <p className="text-text-secondary mb-6">
              To exercise any of these rights, please contact us using the details below.
            </p>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">9. Cookies</h2>
            <p className="text-text-secondary mb-6">
              Our website uses cookies to enhance your browsing experience. For detailed information about the cookies we use and how to manage them, please see our <a href="/cookies" className="text-gold hover:underline">Cookie Policy</a>.
            </p>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">10. Third-Party Links</h2>
            <p className="text-text-secondary mb-6">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read the privacy policies of any third-party sites you visit.
            </p>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">11. Changes to This Policy</h2>
            <p className="text-text-secondary mb-6">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
            </p>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">12. Contact Us</h2>
            <p className="text-text-secondary mb-4">
              If you have any questions about this Privacy Policy or wish to exercise your data protection rights, please contact us:
            </p>
            <div className="bg-background-alt p-6 rounded-lg mb-6">
              <p className="text-text-secondary mb-2">
                <strong className="text-teal">Email:</strong>{' '}
                <a href="mailto:jamie@skykam.co.uk" className="text-gold hover:underline">jamie@skykam.co.uk</a>
              </p>
              <p className="text-text-secondary mb-2">
                <strong className="text-teal">Phone:</strong>{' '}
                <a href="tel:+442046340456" className="text-gold hover:underline">020 4634 0456</a>
              </p>
              <p className="text-text-secondary">
                <strong className="text-teal">Address:</strong> Castlecroft Business Centre, Tom Johnston Road, Dundee DD4 8XD
              </p>
            </div>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">13. Complaints</h2>
            <p className="text-text-secondary mb-6">
              If you are unhappy with how we have handled your personal data, you have the right to lodge a complaint with the Information Commissioner's Office (ICO):
            </p>
            <div className="bg-background-alt p-6 rounded-lg">
              <p className="text-text-secondary mb-2">
                <strong className="text-teal">Website:</strong>{' '}
                <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">www.ico.org.uk</a>
              </p>
              <p className="text-text-secondary">
                <strong className="text-teal">Phone:</strong> 0303 123 1113
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
