import React from "react";
import Header from "../../components/Header/Header";
const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Header/>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-gray-800 bg-opacity-50 backdrop-blur-xl shadow-2xl rounded-3xl p-8 text-gray-100 border border-gray-700">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Privacy Policy</h1>
          <p className="mb-8 text-gray-300">Welcome to <strong className="text-blue-400">Teckzite</strong>! Your privacy is important to us...</p>
          
          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-300">
              <span className="mr-2">1.</span>
              <span>Information We Collect</span>
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="mr-2 text-blue-400">•</span>
                <span><strong className="text-blue-200">Personal Information:</strong> Name, email, phone number, etc.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-400">•</span>
                <span><strong className="text-blue-200">Usage Data:</strong> Device type, IP address, app activity.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-400">•</span>
                <span><strong className="text-blue-200">Cookies and Tracking Technologies:</strong> Used for analysis.</span>
              </li>
            </ul>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-300">
              <span className="mr-2">2.</span>
              <span>How We Use Your Information</span>
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="mr-2 text-blue-400">•</span>
                <span>Provide, operate, and maintain the app.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-400">•</span>
                <span>Improve user experience and troubleshoot issues.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-400">•</span>
                <span>Send notifications and updates (if opted in).</span>
              </li>
            </ul>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-300">
              <span className="mr-2">3.</span>
              <span>How We Share Your Information</span>
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="mr-2 text-blue-400">•</span>
                <span><strong className="text-blue-200">Service Providers:</strong> Third-party vendors for app operations.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-400">•</span>
                <span><strong className="text-blue-200">Legal Authorities:</strong> If required by law.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-400">•</span>
                <span><strong className="text-blue-200">Business Transfers:</strong> In case of mergers or acquisitions.</span>
              </li>
            </ul>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-300">
              <span className="mr-2">4.</span>
              <span>Data Security</span>
            </h2>
            <p className="text-gray-300">We implement industry-standard security measures...</p>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-300">
              <span className="mr-2">5.</span>
              <span>Your Rights & Choices</span>
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="mr-2 text-blue-400">•</span>
                <span>Access, update, or delete your data.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-400">•</span>
                <span>Opt out of marketing communications.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-400">•</span>
                <span>Disable cookies through device settings.</span>
              </li>
            </ul>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-300">
              <span className="mr-2">6.</span>
              <span>Third-Party Links</span>
            </h2>
            <p className="text-gray-300">Our app may contain links to third-party services...</p>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-300">
              <span className="mr-2">7.</span>
              <span>Changes to This Privacy Policy</span>
            </h2>
            <p className="text-gray-300">We may update this policy from time to time...</p>
          </div>

          <div className="mt-12 pt-6 border-t border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-blue-300">Contact Us</h2>
            <p className="text-gray-300">
              If you have any questions, contact us at: 
              <a href="mailto:teckzite@rguktn.ac.in" className="text-blue-400 hover:text-blue-300 ml-1 transition-colors">
                teckzite@rguktn.ac.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
