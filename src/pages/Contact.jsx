import React from 'react';
import ContactForm from '../components/ContactForm';
import { FiMail, FiPhone } from 'react-icons/fi';


export default function Contact() {
return (
<div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8">
<div>
<h1 className="text-3xl font-bold">Contact</h1>
<p className="mt-4 text-slate-700">Use the form to reach out — choose whether you are a job seeker or investor.</p>
<div className="mt-6"><ContactForm /></div>
</div>
<div>
<h3 className="font-semibold">Other ways to reach</h3>
<p className="mt-2 flex items-center gap-2"><FiMail /> hr@talentandtrades.com</p>
<p className="mt-2 flex items-center gap-2"><FiPhone /> +91 9634000899</p>
</div>
</div>
);
}