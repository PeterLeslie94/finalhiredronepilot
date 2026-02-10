import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Skykam Drone Inspections',
  description: 'Terms and Conditions for Skykam Drone Inspections (Skykam LTD). Read our terms governing the use of our drone survey services.',
};

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-teal -mt-[120px] pt-[120px] pb-16">
        <div className="container">
          <div className="max-w-3xl pt-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Terms of Service
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
              These Terms of Service ("Terms") govern your use of the website and services provided by Skykam LTD, trading as Skykam Drone Inspections ("we", "us", "our", or the "Company"). By using our website or engaging our services, you agree to be bound by these Terms.
            </p>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">1. Company Information</h2>
            <div className="bg-background-alt p-4 rounded-lg mb-6">
              <p className="text-text-secondary mb-1"><strong>Company Name:</strong> Skykam LTD</p>
              <p className="text-text-secondary mb-1"><strong>Trading As:</strong> Skykam Drone Inspections</p>
              <p className="text-text-secondary mb-1"><strong>Company Number:</strong> SC662275</p>
              <p className="text-text-secondary mb-1"><strong>Registered in:</strong> Scotland</p>
              <p className="text-text-secondary"><strong>Address:</strong> Castlecroft Business Centre, Tom Johnston Road, Dundee DD4 8XD</p>
            </div>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">2. Services</h2>
            <p className="text-text-secondary mb-4">
              Skykam Drone Inspections provides professional drone survey, aerial photography, photogrammetry, LiDAR mapping, and related geospatial services across the United Kingdom. Our services include but are not limited to:
            </p>
            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Topographic surveys</li>
              <li>Volumetric surveys</li>
              <li>Building and roof inspections</li>
              <li>Construction monitoring</li>
              <li>LiDAR mapping</li>
              <li>Photogrammetry and orthomosaic production</li>
              <li>3D modelling</li>
            </ul>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">3. Quotations and Orders</h2>
            <h3 className="text-xl font-semibold text-teal-dark mt-6 mb-3">3.1 Quotations</h3>
            <p className="text-text-secondary mb-4">
              All quotations are valid for 30 days from the date of issue unless otherwise stated. Quotations are subject to site conditions, weather, and airspace restrictions. We reserve the right to amend quotations if project specifications change.
            </p>

            <h3 className="text-xl font-semibold text-teal-dark mt-6 mb-3">3.2 Acceptance</h3>
            <p className="text-text-secondary mb-4">
              A contract is formed when you accept our quotation in writing (including email) or when we confirm acceptance of your order. All orders are subject to these Terms and any specific terms set out in the quotation.
            </p>

            <h3 className="text-xl font-semibold text-teal-dark mt-6 mb-3">3.3 Cancellation</h3>
            <p className="text-text-secondary mb-6">
              Cancellations must be made in writing. Cancellation charges may apply as follows:
            </p>
            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>More than 7 days before scheduled survey: No charge</li>
              <li>3-7 days before scheduled survey: 25% of quoted price</li>
              <li>Less than 3 days before scheduled survey: 50% of quoted price</li>
              <li>Less than 24 hours or no-show: 100% of quoted price</li>
            </ul>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">4. Site Access and Requirements</h2>
            <p className="text-text-secondary mb-4">
              The client is responsible for:
            </p>
            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Providing safe and clear access to the survey site</li>
              <li>Obtaining necessary permissions from landowners and relevant parties</li>
              <li>Providing accurate site information and any known hazards</li>
              <li>Ensuring the site is free from obstructions that could affect the survey</li>
              <li>Providing any required health and safety documentation</li>
            </ul>
            <p className="text-text-secondary mb-6">
              We reserve the right to refuse to conduct a survey if site conditions are unsafe or unsuitable. Additional charges may apply for abortive site visits due to client-side issues.
            </p>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">5. Weather and Airspace</h2>
            <p className="text-text-secondary mb-6">
              Drone operations are subject to weather conditions and airspace restrictions. We will make reasonable efforts to schedule surveys in suitable conditions. If a survey cannot proceed due to weather or airspace restrictions, we will reschedule at no additional cost. However, we cannot guarantee specific survey dates and accept no liability for delays caused by factors beyond our control.
            </p>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">6. Deliverables and Accuracy</h2>
            <h3 className="text-xl font-semibold text-teal-dark mt-6 mb-3">6.1 Deliverables</h3>
            <p className="text-text-secondary mb-4">
              The specific deliverables, formats, and accuracy levels will be agreed upon in the quotation. Standard deliverables may include orthomosaics, point clouds, contour maps, digital terrain models, 3D models, and survey reports.
            </p>

            <h3 className="text-xl font-semibold text-teal-dark mt-6 mb-3">6.2 Accuracy</h3>
            <p className="text-text-secondary mb-6">
              While we use professional survey-grade equipment and methodologies, absolute accuracy depends on various factors including ground control, GPS conditions, and site characteristics. Stated accuracy levels are typical values and may vary. We recommend independent verification for critical applications.
            </p>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">7. Intellectual Property</h2>
            <h3 className="text-xl font-semibold text-teal-dark mt-6 mb-3">7.1 Ownership</h3>
            <p className="text-text-secondary mb-4">
              Upon full payment, the client will own the survey data and deliverables produced specifically for their project. We retain the right to use anonymised data for internal quality control, training, and equipment calibration.
            </p>

            <h3 className="text-xl font-semibold text-teal-dark mt-6 mb-3">7.2 Portfolio Use</h3>
            <p className="text-text-secondary mb-6">
              Unless otherwise agreed, we may use images and non-confidential project information in our portfolio, marketing materials, and case studies. We will not use data that identifies specific clients without permission.
            </p>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">8. Payment Terms</h2>
            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Payment is due within 30 days of invoice date unless otherwise agreed</li>
              <li>For new clients or large projects, we may require a deposit of up to 50% before commencing work</li>
              <li>Late payments may incur interest at 8% above the Bank of England base rate</li>
              <li>We reserve the right to withhold deliverables until payment is received</li>
              <li>All prices are quoted exclusive of VAT unless stated otherwise</li>
            </ul>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">9. Liability and Insurance</h2>
            <h3 className="text-xl font-semibold text-teal-dark mt-6 mb-3">9.1 Insurance</h3>
            <p className="text-text-secondary mb-4">
              We maintain comprehensive insurance coverage including:
            </p>
            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Public Liability Insurance: £10,000,000</li>
              <li>Professional Indemnity Insurance</li>
              <li>Drone-specific aviation insurance</li>
            </ul>

            <h3 className="text-xl font-semibold text-teal-dark mt-6 mb-3">9.2 Limitation of Liability</h3>
            <p className="text-text-secondary mb-6">
              Our total liability under or in connection with a contract shall not exceed the greater of £1,000,000 or the total fees paid under that contract. We shall not be liable for any indirect, consequential, or special damages, loss of profits, data, or business opportunities. Nothing in these terms excludes liability for death, personal injury, or fraud.
            </p>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">10. Compliance</h2>
            <p className="text-text-secondary mb-4">
              We operate in full compliance with:
            </p>
            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>UK Civil Aviation Authority (CAA) regulations</li>
              <li>Air Navigation Order 2016 (as amended)</li>
              <li>UK GDPR and Data Protection Act 2018</li>
              <li>Health and Safety at Work Act 1974</li>
            </ul>
            <p className="text-text-secondary mb-6">
              Our drone pilots hold the General Visual Line of Sight Certificate (GVC) and A2 Certificate of Competency as required by the CAA.
            </p>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">11. Confidentiality</h2>
            <p className="text-text-secondary mb-6">
              We will treat all client information as confidential and will not disclose it to third parties without consent, except where required by law or necessary for the performance of our services. Confidential information will be handled in accordance with our Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">12. Force Majeure</h2>
            <p className="text-text-secondary mb-6">
              We shall not be liable for any failure or delay in performing our obligations due to circumstances beyond our reasonable control, including but not limited to severe weather, airspace restrictions, equipment failure, pandemic, civil unrest, or acts of government.
            </p>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">13. Website Use</h2>
            <p className="text-text-secondary mb-4">
              By using our website, you agree:
            </p>
            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Not to use the website for any unlawful purpose</li>
              <li>Not to attempt to gain unauthorised access to any part of the website</li>
              <li>Not to copy, reproduce, or redistribute website content without permission</li>
              <li>That all information you provide is accurate and complete</li>
            </ul>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">14. Governing Law</h2>
            <p className="text-text-secondary mb-6">
              These Terms shall be governed by and construed in accordance with the laws of Scotland. Any disputes shall be subject to the exclusive jurisdiction of the Scottish courts.
            </p>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">15. Amendments</h2>
            <p className="text-text-secondary mb-6">
              We reserve the right to amend these Terms at any time. Changes will be effective upon posting to our website. Continued use of our services after changes are posted constitutes acceptance of the amended Terms.
            </p>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">16. Contact</h2>
            <p className="text-text-secondary mb-4">
              For any questions regarding these Terms, please contact us:
            </p>
            <div className="bg-background-alt p-6 rounded-lg">
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
          </div>
        </div>
      </section>
    </>
  );
}
