import React from 'react';
import JobCard from '../components/JobCard';
import jobs from '../data/jobs';


export default function Placements() {
return (
<div className="max-w-6xl mx-auto px-4 py-10">
<h1 className="text-3xl font-bold">Placements & Career Services</h1>
<p className="mt-4 text-slate-600">We help candidates with resume, interview prep and job matching.</p>


<section className="mt-8">
<h3 className="font-semibold">Our Process</h3>
<ol className="list-decimal ml-6 mt-3 text-slate-700">
<li>Profile Submission</li>
<li>Skill & Role Matching</li>
<li>Interview Coaching</li>
<li>Placement & Follow-up</li>
</ol>
</section>


<section className="mt-8">
<h3 className="font-semibold">Open Roles</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
{jobs.map((j) => <JobCard key={j.id} job={j} />)}
</div>
</section>
</div>
);
}