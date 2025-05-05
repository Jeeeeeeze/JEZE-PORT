import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false); // works for both desktop & mobile

  return (
    <nav className="bg-black shadow-md fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold text-gray-400">J E Z E</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#" className="text-gray-400 hover:text-blue-600">Home</a>

          {/* Gallery Dropdown (Click-based) */}
          <div className="relative">
            <button
              onClick={() => setGalleryOpen(!galleryOpen)}
              className="text-gray-400 hover:text-blue-600"
            >
              Gallery
            </button>
            {galleryOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-white text-black shadow-md rounded-md z-50">
                <li className='block px-4 py-2 hover:bg-gray-100'><Link to="/Fanart">FanArt</Link></li>
                <li className='block px-4 py-2 hover:bg-gray-100'><Link to="/Page2">Game Fanart</Link></li>
                <li className='block px-4 py-2 hover:bg-gray-100'><Link to="/Page3">Official</Link></li>
              </div>
            )}
          </div>

          <li className='text-gray-400 hover:text-blue-600 list-none'><Link to="/Contact">Contact</Link></li>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-400">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black shadow-md px-4 py-2 space-y-2">
          <a href="#" className="block text-gray-400">Home</a>

          {/* Mobile Gallery Toggle */}
          <div>
            <button onClick={() => setGalleryOpen(!galleryOpen)} className="w-full text-left text-gray-400">
              Gallery
            </button>
            {galleryOpen && (
              <div className="ml-4 mt-1 space-y-1">
                <a href="#" className="block text-gray-400 text-sm">Fanart</a>
                <a href="#" className="block text-gray-400 text-sm">Game Fanart</a>
                <a href="#" className="block text-gray-400 text-sm">Sketches</a>
              </div>
            )}
          </div>

          <a href="#" className="block text-gray-400">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
