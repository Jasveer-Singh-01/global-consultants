import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroBg from '../assets/images/home/chart-vec.jpg'; // 👈 import your image
import heroVideo from '../assets/videos/hero-bg.mp4'; // 👈 import your image

export default function Hero() {
  const navigate = useNavigate();

  return (
    // <section
    //   className="relative bg-cover bg-center bg-no-repeat py-20"
    //   style={{
    //     backgroundImage: `url(${heroBg})`, // 👈 use imported image here
    //   }}
    // >

      <section className="relative overflow-hidden py-20">
      {/* 🎬 Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8 text-white">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-extrabold">
            Empowering Careers & Growing Investments
          </h1>
          <p className="mt-4 text-lg text-gray-100">
            We connect professionals to the right companies and offer transparent
            investment options for qualified investors.
          </p>
          <div className="mt-6 flex gap-3">
            <button
              onClick={() => navigate('/placements')}
              className="px-4 py-2 bg-slate-800 text-white rounded hover:bg-slate-700"
            >
              For Job Seekers
            </button>
            <button
              onClick={() => navigate('/investors')}
              className="px-4 py-2 border border-white rounded hover:bg-white hover:text-slate-800"
            >
              For Investors
            </button>
          </div>
        </div>

        <motion.div
          className="md:w-1/2 bg-white/90 p-6 rounded-lg shadow text-slate-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="font-semibold">Quick Stats</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li>• 200+ Candidates Assisted</li>
            <li>• Personalized Interview Coaching</li>
            <li>• Investment options for accredited investors</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
