import React from 'react';
import Hero from '../components/Hero';
import JobCard from '../components/JobCard';
// import jobs from '../data/jobs';
import jobs from "/src/data/jobs.js";
// import testimonials from '../data/testimonials';
import { testimonials } from "/src/data/testimonials.js";


export default function Home() {
return (
<main>
<Hero />
<section className="max-w-6xl mx-auto px-4 py-10">
<h2 className="text-2xl font-semibold">Open Roles</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
{jobs.map((j) => <JobCard key={j.id} job={j} />)}
</div>
</section>


<section className="bg-slate-50 py-10">
<div className="max-w-6xl mx-auto px-4">
<h2 className="text-2xl font-semibold">Success Stories</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
{testimonials.map((t) => (
<div key={t.id} className="border rounded p-4">
<p className="italic">"{t.text}"</p>
<p className="mt-2 font-semibold">— {t.name}</p>
</div>
))}
</div>
</div>
</section>
</main>
);
}