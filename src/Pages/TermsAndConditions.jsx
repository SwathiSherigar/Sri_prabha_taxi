import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';

const TermsAndConditions = () => {
  useEffect(() => {
    // Scroll to the top of the page on mount
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8 mt-16"> {/* Add offset margin with mt-16 */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900">Terms and Conditions</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">1. Introduction</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Welcome to Sri Prabha Tours & Travel. By accessing or using our taxi booking service, you agree to comply with and be bound by the following terms and conditions. Please read these terms carefully.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">2. Service Overview</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Our platform connects you with taxi owners, allowing you to book a taxi by calling them directly. Availability of the service may vary depending on your location and the time of your request.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">3. Booking Process and Payment</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            To book a taxi, you must contact the taxi owner using the contact information provided on our platform. Payment terms and conditions are agreed upon directly with the taxi owner. We are not responsible for any financial transactions or disputes between you and the taxi owner.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">4. Cancellation and Refunds</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Cancellation policies are determined by the individual taxi owner. Please discuss any cancellation or refund requests directly with the taxi owner. We do not handle cancellations or refunds.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">5. User Responsibilities</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            You agree to use our service responsibly and in accordance with all applicable laws. Ensure that all information provided during the booking process is accurate and up-to-date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">6. Limitation of Liability</h2>
          <p className="text-lg leading-relaxed text-gray-700">
          Sri Prabha Tours & Travel is not liable for any direct, indirect, incidental, or consequential damages resulting from the use of our service. Our liability is limited to the extent permitted by law.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">7. Modifications to Terms</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            We reserve the right to modify these terms and conditions at any time. Changes will be effective immediately upon posting. Your continued use of our service constitutes acceptance of any updated terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">8. Contact Information</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            If you have any questions or concerns regarding these terms and conditions, please contact us at Ambalapady, N.J.-66 Udupi-576101.
          </p>
        </section>

        <footer className="border-t pt-4 text-center text-sm text-gray-600">
          <p>&copy; 2024 Sri Prabha Tours & Travel. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default TermsAndConditions;
