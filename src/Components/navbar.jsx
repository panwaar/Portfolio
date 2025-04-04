import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo-color.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed z-[999] w-full px-6 md:px-20 py-4 flex justify-between items-center text-white bg-transparent">
      {/* Logo */}
      <div className="logo">
        <RouterLink to="/">
          <img src={logo} alt="Logo" className="w-24 md:w-32 h-auto" />
        </RouterLink>
      </div>

      {!isOpen && (
        <button
          className="md:hidden text-white z-[1001]"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={30} />
        </button>
      )}

      {/* Desktop Links */}
      <div className="hidden md:flex gap-10">
        <RouterLink to="/services" className="text-md capitalize font-medium">
          Skills
        </RouterLink>
        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer text-md capitalize font-medium"
        >
          Projects
        </ScrollLink>
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          className="cursor-pointer text-md capitalize font-medium"
        >
          About
        </ScrollLink>
        <RouterLink to="/contact" className="text-md capitalize font-medium">
          Contact
        </RouterLink>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 right-0 h-screen bg-black text-white w-[70%] md:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-5 right-5 text-white"
          onClick={() => setIsOpen(false)}
        >
          <X size={30} />
        </button>
        <div className="flex flex-col items-center justify-center h-full gap-8 text-xl">
          <RouterLink
            to="/services"
            className="capitalize font-medium"
            onClick={() => setIsOpen(false)}
          >
            Services
          </RouterLink>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            className="capitalize font-medium"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="capitalize font-medium"
            onClick={() => setIsOpen(false)}
          >
            About
          </ScrollLink>
          <RouterLink
            to="/contact"
            className="capitalize font-medium"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </RouterLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
