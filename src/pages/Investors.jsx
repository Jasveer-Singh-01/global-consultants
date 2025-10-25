import React from 'react';
import { Link } from 'react-router-dom';


export default function Investors() {
return (
<div className="max-w-6xl mx-auto px-4 py-10">
<h1 className="text-3xl font-bold">Invest with Us</h1>
<p className="mt-4 text-slate-600">We offer managed trading accounts and mentorship options.</p>


<section className="mt-8 grid md:grid-cols-2 gap-6">
<div className="border rounded p-6">
<h4 className="font-semibold">Managed Accounts</h4>
<p className="mt-2 text-sm text-slate-700">For qualified investors, transparent monthly reporting and disciplined risk controls.</p>
<ul className="mt-3 text-sm list-disc ml-6">
<li>Quarterly reports</li>
<li>Stop-loss rules</li>
<li>Monthly updates</li>
</ul>
<div className="mt-4"><Link to="/contact" className="px-4 py-2 bg-slate-800 text-white rounded">Talk to us</Link></div>
</div>


<div className="border rounded p-6">
<h4 className="font-semibold">Mentorship & Courses</h4>
<p className="mt-2 text-sm text-slate-700">Personal coaching and group workshops on trading strategy.</p>
<div className="mt-4"><Link to="/contact" className="px-4 py-2 border rounded">Enquire</Link></div>
</div>
</section>


<div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4">
<strong>Disclaimer:</strong> Trading involves risk. Past performance is not a guarantee of future returns.
</div>
</div>
);
}