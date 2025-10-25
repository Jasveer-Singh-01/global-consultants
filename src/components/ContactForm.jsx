import React from 'react';


export default function ContactForm() {
const handleSubmit = (e) => {
e.preventDefault();
alert('Demo only. Integrate your backend API here.');
};
return (
<form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
<input required name="name" placeholder="Your name" className="w-full border p-2 rounded" />
<input required name="email" type="email" placeholder="Email" className="w-full border p-2 rounded" />
<select name="interest" className="w-full border p-2 rounded">
<option>I'm a Job Seeker</option>
<option>I'm an Investor</option>
<option>Other</option>
</select>
<textarea name="message" placeholder="Message" className="w-full border p-2 rounded" rows={4}></textarea>
<button type="submit" className="px-4 py-2 bg-slate-800 text-white rounded">Send Message</button>
</form>
);
}