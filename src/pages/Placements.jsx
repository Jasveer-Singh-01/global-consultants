import React from 'react';
import JobCard from '../components/JobCard';
import jobs from '../data/jobs';
import bgImage from '../assets/images/home/blogimage.png'; 

export default function Placements() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-10"
      style={{
        backgroundImage: `url(${bgImage})`, // 👈 use imported image here
      }}
    >
      {/* Optional dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-6xl mx-auto px-4 text-white">
        <h1 className="text-3xl font-bold">Placements & Career Services</h1>
        <p className="mt-4 text-slate-100">
          We help candidates with resume, interview prep and job matching.
        </p>

        <section className="mt-8">
          <h3 className="font-semibold text-lg">Our Process</h3>
          <ol className="list-decimal ml-6 mt-3 text-slate-100 space-y-1">
            <li>Profile Submission</li>
            <li>Skill & Role Matching</li>
            <li>Interview Coaching</li>
            <li>Placement & Follow-up</li>
          </ol>
        </section>

        <section className="mt-8">
          <h3 className="font-semibold text-lg">Open Roles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {jobs.map((j) => (
              <JobCard key={j.id} job={j} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
