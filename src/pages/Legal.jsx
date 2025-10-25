import React from 'react';

export default function Legal() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Legal & Disclaimers</h1>

      {/* Investment Disclaimer */}
      <section className="mt-4">
        <h3 className="font-semibold text-xl">Investment Disclaimer</h3>
        <p className="mt-2 text-slate-700">
          All investments carry risk. Past performance is not indicative of future results.
          The information and opinions provided on this website are for educational and
          informational purposes only and do not constitute financial advice, investment
          recommendations, or any solicitation to buy or sell securities. You should
          carefully consider your financial situation, risk tolerance, and consult with a
          licensed financial advisor before making any investment decisions. We do not
          guarantee profits or protection from losses in trading or investing activities.
        </p>
      </section>

      {/* Consultancy Disclaimer */}
      <section className="mt-8">
        <h3 className="font-semibold text-xl">Consultancy & Placement Disclaimer</h3>
        <p className="mt-2 text-slate-700">
          While we strive to connect candidates with genuine job opportunities, we make no
          guarantees of employment or specific outcomes. We do not charge candidates any
          hidden fees for placement services. All employer and candidate information is
          handled responsibly, but we are not liable for any loss, damages, or misrepresentation
          arising out of third-party job postings or employment offers.
        </p>
      </section>

      {/* Data & Privacy */}
      <section className="mt-8">
        <h3 className="font-semibold text-xl">Data & Privacy Policy</h3>
        <p className="mt-2 text-slate-700">
          By using this website, you consent to the collection and limited use of your personal
          information for communication and service purposes. We do not sell or share your data
          with third parties without consent. You can request data deletion at any time by
          contacting us via the details provided on the Contact page.
        </p>
      </section>

      {/* Limitation of Liability */}
      <section className="mt-8">
        <h3 className="font-semibold text-xl">Limitation of Liability</h3>
        <p className="mt-2 text-slate-700">
          We are not liable for any direct, indirect, incidental, or consequential damages
          arising from the use of this website, services, or investment-related information.
          You agree to use our services at your own risk and discretion.
        </p>
      </section>

      {/* Contact Info */}
      <section className="mt-8">
        <h3 className="font-semibold text-xl">Contact Information</h3>
        <p className="mt-2 text-slate-700">
          If you have any questions regarding these terms, disclaimers, or policies, please
          reach out to us through the <a href="/contact" className="text-blue-600 hover:underline">Contact</a> page.
        </p>
      </section>
    </div>
  );
}
