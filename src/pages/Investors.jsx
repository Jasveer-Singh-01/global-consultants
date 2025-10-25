import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../assets/images/home/investment.png'; // 👈 import your background image

export default function Investors() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-10"
      style={{
        backgroundImage: `url(${bgImage})`, // 👈 use imported image here
      }}
    >
      {/* Optional overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-6xl mx-auto px-4 text-white">
        <h1 className="text-3xl font-bold">Invest with Us</h1>
        <p className="mt-4 text-slate-100">
          We offer managed trading accounts and mentorship options.
        </p>

        <section className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-white/90 border rounded p-6 text-slate-800 shadow">
            <h4 className="font-semibold">Managed Accounts</h4>
            <p className="mt-2 text-sm">
              For qualified investors, transparent monthly reporting and disciplined risk controls.
            </p>
            <ul className="mt-3 text-sm list-disc ml-6">
              <li>Quarterly reports</li>
              <li>Stop-loss rules</li>
              <li>Monthly updates</li>
            </ul>
            <div className="mt-4">
              <Link
                to="/contact"
                className="px-4 py-2 bg-slate-800 text-white rounded hover:bg-slate-700"
              >
                Talk to us
              </Link>
            </div>
          </div>

          <div className="bg-white/90 border rounded p-6 text-slate-800 shadow">
            <h4 className="font-semibold">Mentorship & Courses</h4>
            <p className="mt-2 text-sm">
              Personal coaching and group workshops on trading strategy.
            </p>
            <div className="mt-4">
              <Link
                to="/contact"
                className="px-4 py-2 border border-slate-800 rounded hover:bg-slate-800 hover:text-white"
              >
                Enquire
              </Link>
            </div>
          </div>
        </section>

        <div className="mt-8 bg-yellow-100/80 border-l-4 border-yellow-400 p-4 text-slate-900">
          <strong>Disclaimer:</strong> Trading involves risk. Past performance is not a guarantee of
          future returns.
        </div>
      </div>
    </section>
  );
}
