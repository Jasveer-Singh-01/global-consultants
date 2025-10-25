import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Placements from './pages/Placements';
import Investors from './pages/Investors';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Legal from './pages/Legal';


export default function App() {
return (
<Router>
<div className="flex flex-col min-h-screen">
<Navbar />
<div className="flex-1">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/placements" element={<Placements />} />
<Route path="/investors" element={<Investors />} />
<Route path="/about" element={<About />} />
<Route path="/blog" element={<Blog />} />
<Route path="/contact" element={<Contact />} />
<Route path="/legal" element={<Legal />} />
</Routes>
</div>
<Footer />
</div>
</Router>
);
}