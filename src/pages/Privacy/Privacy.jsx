import React from "react";
import Header from "../../components/Header/Header";
const Privacy = () => {
  return (
    <div>
       

    <div className="flex justify-center items-center min-h-screen bg-gray-900 p-5 md:p-10 ">
    <Header/>
      <div className="max-w-3xl w-full bg-white bg-opacity-10 backdrop-blur-lg shadow-lg rounded-2xl p-3 md:p-8 text-white my-[80px]">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        {/* <p className="mb-2"><strong>Effective Date:</strong> [Insert Date]</p> */}
        <p className="mb-4">Welcome to <strong>Teckzite</strong>! Your privacy is important to us...</p>
        
        <h2 className="text-xl font-semibold mt-6">1. Information We Collect</h2>
        <ul className="list-disc ml-6 mt-2">
          <li><strong>Personal Information:</strong> Name, email, phone number, etc.</li>
          <li><strong>Usage Data:</strong> Device type, IP address, app activity.</li>
          <li><strong>Cookies and Tracking Technologies:</strong> Used for analysis.</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">2. How We Use Your Information</h2>
        <ul className="list-disc ml-6 mt-2">
          <li>Provide, operate, and maintain the app.</li>
          <li>Improve user experience and troubleshoot issues.</li>
          <li>Send notifications and updates (if opted in).</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">3. How We Share Your Information</h2>
        <ul className="list-disc ml-6 mt-2">
          <li><strong>Service Providers:</strong> Third-party vendors for app operations.</li>
          <li><strong>Legal Authorities:</strong> If required by law.</li>
          <li><strong>Business Transfers:</strong> In case of mergers or acquisitions.</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">4. Data Security</h2>
        <p className="mt-2">We implement industry-standard security measures...</p>
        
        <h2 className="text-xl font-semibold mt-6">5. Your Rights & Choices</h2>
        <ul className="list-disc ml-6 mt-2">
          <li>Access, update, or delete your data.</li>
          <li>Opt out of marketing communications.</li>
          <li>Disable cookies through device settings.</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">6. Third-Party Links</h2>
        <p className="mt-2">Our app may contain links to third-party services...</p>
        
        <h2 className="text-xl font-semibold mt-6">7. Changes to This Privacy Policy</h2>
        <p className="mt-2">We may update this policy from time to time...</p>
        
        <h2 className="text-xl font-semibold mt-6">8. Contact Us</h2>
        <p className="mt-2">If you have any questions, contact us at: [Insert Contact Email]</p>
      </div>
    </div>
    </div>
  );
};

export default Privacy;
