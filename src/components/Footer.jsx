import React from 'react';
import { Link } from 'react-router-dom';


export default function Footer() {
return (
<footer className="bg-slate-900 text-white">
<div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
<div>
<h3 className="font-bold text-lg">TalentAndTrades</h3>
<p className="mt-2 text-sm">Connecting talent with opportunity and investors with disciplined trading.</p>
</div>
<div>
<h4 className="font-semibold">Contact</h4>
<p className="text-sm mt-2">Email: hr@talentandtrades.com</p>
<p className="text-sm">Phone: +91 9634000899</p>
</div>
<div>
<h4 className="font-semibold">Legal</h4>
<Link to="/legal" className="text-sm block mt-2">Investment Disclaimer</Link>
</div>
</div>
<div className="text-center text-sm py-4 border-t border-slate-800">© {new Date().getFullYear()} Mollak Ventures — All rights reserved</div>
</footer>
);
}