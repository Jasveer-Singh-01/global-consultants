import React from 'react';


export default function JobCard({ job }) {
return (
<div className="border rounded p-4">
<h4 className="font-semibold">{job.title}</h4>
<p className="text-sm text-slate-600">{job.company} • {job.location} • {job.exp}</p>
<div className="mt-3 flex gap-2">
<button className="px-3 py-1 border rounded text-sm">Apply</button>
<button className="px-3 py-1 bg-slate-800 text-white rounded text-sm">Refer</button>
</div>
</div>
);
}