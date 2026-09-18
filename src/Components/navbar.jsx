import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo-color.png';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/contact', label: 'Contact' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `capitalize font-medium transition-colors duration-200 ${
      isActive
        ? 'text-[#e0d4cd] border-b-2 border-[#e0d4cd]'
        : 'text-[#e0d4cd]/70 hover:text-[#e0d4cd] border-b-2 border-transparent'
    }`;

  return (
    <nav className="fixed z-[999] w-full px-5 md:px-20 py-3 flex justify-between items-center bg-[#004D43]/90 backdrop-blur-sm">
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10 md:h-12 w-auto" />
        </Link>
      </div>

      {!isOpen && (
        <button
          className="md:hidden text-[#e0d4cd] z-[1001]"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      )}

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8">
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={linkClass}
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen bg-[#012924] w-[70%] md:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          className="absolute top-5 right-5 text-[#e0d4cd]"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <X size={28} />
        </button>
        <div className="flex flex-col items-center justify-center h-full gap-8 text-lg">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
