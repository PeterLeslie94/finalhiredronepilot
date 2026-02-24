import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | HireDronePilot',
  description: 'Cookie Policy for HireDronePilot. Learn about the cookies we use and how to manage your preferences.',
};

export default function CookiePolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-teal -mt-[120px] pt-[120px] pb-16">
        <div className="container">
          <div className="max-w-3xl pt-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Cookie Policy
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
              This Cookie Policy explains how HireDronePilot (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses cookies and similar technologies when you visit our website at hiredronepilot.uk.
            </p>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">1. What Are Cookies?</h2>
            <p className="text-text-secondary mb-6">
              Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners. Cookies can be "persistent" (remaining on your device for a set period) or "session" cookies (deleted when you close your browser).
            </p>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">2. How We Use Cookies</h2>
            <p className="text-text-secondary mb-4">
              We use cookies for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
              <li><strong>Performance Cookies:</strong> Help us understand how visitors use our website</li>
              <li><strong>Functionality Cookies:</strong> Remember your preferences and settings</li>
              <li><strong>Analytics Cookies:</strong> Collect anonymous information about website usage</li>
            </ul>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">3. Types of Cookies We Use</h2>

            <h3 className="text-xl font-semibold text-teal-dark mt-6 mb-3">3.1 Essential Cookies</h3>
            <p className="text-text-secondary mb-4">
              These cookies are necessary for the website to function and cannot be disabled. They are usually set in response to your actions, such as setting privacy preferences, logging in, or filling in forms.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-background-alt">
                    <th className="border border-border p-3 text-left text-teal font-semibold">Cookie Name</th>
                    <th className="border border-border p-3 text-left text-teal font-semibold">Purpose</th>
                    <th className="border border-border p-3 text-left text-teal font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody className="text-text-secondary">
                  <tr>
                    <td className="border border-border p-3">cookie_consent</td>
                    <td className="border border-border p-3">Stores your cookie preferences</td>
                    <td className="border border-border p-3">1 year</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">hdp_session</td>
                    <td className="border border-border p-3">Maintains login session state for admins and drone pilots</td>
                    <td className="border border-border p-3">7 days</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-teal-dark mt-6 mb-3">3.2 Analytics Cookies</h3>
            <p className="text-text-secondary mb-4">
              We may use analytics cookies to collect information about how visitors use our website. This helps us improve our website and provide a better user experience. The information collected is anonymous and aggregated.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-background-alt">
                    <th className="border border-border p-3 text-left text-teal font-semibold">Cookie Name</th>
                    <th className="border border-border p-3 text-left text-teal font-semibold">Purpose</th>
                    <th className="border border-border p-3 text-left text-teal font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody className="text-text-secondary">
                  <tr>
                    <td className="border border-border p-3">_ga</td>
                    <td className="border border-border p-3">Google Analytics - distinguishes users</td>
                    <td className="border border-border p-3">2 years</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">_ga_*</td>
                    <td className="border border-border p-3">Google Analytics - maintains session state</td>
                    <td className="border border-border p-3">2 years</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">_gid</td>
                    <td className="border border-border p-3">Google Analytics - distinguishes users</td>
                    <td className="border border-border p-3">24 hours</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-teal-dark mt-6 mb-3">3.3 Functionality Cookies</h3>
            <p className="text-text-secondary mb-6">
              These cookies allow the website to remember choices you make (such as your preferred language or region) and provide enhanced, personalised features.
            </p>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">4. Third-Party Cookies</h2>
            <p className="text-text-secondary mb-4">
              Some cookies on our website are set by third-party services. These may include:
            </p>
            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li><strong>Google Analytics:</strong> For website usage analysis</li>
              <li><strong>Google Maps:</strong> For displaying interactive maps (if applicable)</li>
              <li><strong>Vercel Analytics:</strong> For website performance monitoring</li>
            </ul>
            <p className="text-text-secondary mb-6">
              We do not control the cookies set by third parties. Please refer to their respective privacy policies for more information about how they use cookies.
            </p>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">5. Managing Cookies</h2>
            <h3 className="text-xl font-semibold text-teal-dark mt-6 mb-3">5.1 Browser Settings</h3>
            <p className="text-text-secondary mb-4">
              Most web browsers allow you to control cookies through their settings. You can:
            </p>
            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>View what cookies are stored on your device</li>
              <li>Delete all or specific cookies</li>
              <li>Block cookies from being set</li>
              <li>Set preferences for specific websites</li>
            </ul>
            <p className="text-text-secondary mb-4">
              Here are links to instructions for managing cookies in common browsers:
            </p>
            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Apple Safari</a></li>
              <li><a href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Microsoft Edge</a></li>
            </ul>

            <h3 className="text-xl font-semibold text-teal-dark mt-6 mb-3">5.2 Opt-Out of Analytics</h3>
            <p className="text-text-secondary mb-6">
              To opt out of Google Analytics tracking across all websites, you can install the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Google Analytics Opt-out Browser Add-on</a>.
            </p>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">6. Impact of Disabling Cookies</h2>
            <p className="text-text-secondary mb-6">
              If you choose to disable or delete cookies, some parts of our website may not function properly. Essential cookies are required for basic functionality, and disabling them may prevent you from accessing certain features.
            </p>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">7. Similar Technologies</h2>
            <p className="text-text-secondary mb-4">
              In addition to cookies, we may use similar technologies such as:
            </p>
            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li><strong>Local Storage:</strong> Data stored in your browser that persists after closing</li>
              <li><strong>Session Storage:</strong> Data stored for the duration of your browser session</li>
              <li><strong>Pixel Tags:</strong> Small images used to track website usage</li>
            </ul>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">8. Updates to This Policy</h2>
            <p className="text-text-secondary mb-6">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, regulatory, or operational reasons. The updated policy will be posted on this page with a revised "last updated" date.
            </p>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">9. More Information</h2>
            <p className="text-text-secondary mb-4">
              For more information about cookies and how to manage them, visit:
            </p>
            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li><a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">www.aboutcookies.org</a></li>
              <li><a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">www.allaboutcookies.org</a></li>
            </ul>

            <h2 className="text-2xl font-bold text-teal mt-10 mb-4">10. Contact Us</h2>
            <p className="text-text-secondary mb-4">
              If you have any questions about our use of cookies, please contact us:
            </p>
            <div className="bg-background-alt p-6 rounded-lg">
              <p className="text-text-secondary mb-2">
                <strong className="text-teal">Email:</strong>{' '}
                <a href="mailto:quotes@hiredronepilot.uk" className="text-gold hover:underline">quotes@hiredronepilot.uk</a>
              </p>
              <p className="text-text-secondary mb-2">
                <strong className="text-teal">Phone:</strong>{' '}
                <a href="tel:+441334804554" className="text-gold hover:underline">+44 1334 804554</a>
              </p>
              <p className="text-text-secondary">
                <strong className="text-teal">Address:</strong> Castlecroft Business Centre, Tom Johnston Road, Dundee DD4 8XD
              </p>
            </div>

            <p className="text-text-secondary mt-8">
              For information about how we handle your personal data, please see our{' '}
              <a href="/privacy" className="text-gold hover:underline">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
