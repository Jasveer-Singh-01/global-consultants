import React from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';


export default function Navbar() {
return (
<header className="bg-teal-800 shadow-sm">
<div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
<Link to="/" className="text-2xl font-bold">Empowering Careers</Link>
<nav className="hidden md:flex gap-6 items-center">
<Link to="/placements">Placements</Link>
<Link to="/investors">Investors</Link>
<Link to="/blog">Blog</Link>
<Link to="/about">About</Link>
<Link to="/contact" className="bg-slate-800 text-white px-4 py-2 rounded">Contact</Link>
</nav>
<button className="md:hidden"><FiMenu size={20} /></button>
</div>
</header>
);
}