'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border-b  h-12 px-20">
      <div className="flex items-center justify-between">
        <div className="dark:text-white text-lg font-bold">
          <Link href="/">My App</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="dark:text-white hover:text-gray-400">Home</Link>
          <Link href="/about" className="dark:text-white hover:text-gray-400">About</Link>
          <Link href="/contact" className="dark:text-white hover:text-gray-400">Contact</Link>
          <Link href="/profile" className="dark:text-white hover:text-gray-400">Profile</Link>
        </div>
        <button
          className="md:hidden dark:text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-2 mt-2">
            <Link href="/" className="dark:text-white hover:text-gray-400">Home</Link>
            <Link href="/about" className="dark:text-white hover:text-gray-400">About</Link>
            <Link href="/contact" className="dark:text-white hover:text-gray-400">Contact</Link>
            <Link href="/profile" className="dark:text-white hover:text-gray-400">Profile</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
