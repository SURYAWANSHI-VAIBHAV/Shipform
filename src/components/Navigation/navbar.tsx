'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border-b bg-background text-foreground h-14 px-8">
      <div className="flex items-center justify-between">
        <div className="text-lg font-bold">
          <Link href="/" className="text-primary">My App</Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-muted-foreground transition-colors">Home</Link>
          <Link href="/about" className="hover:text-muted-foreground transition-colors">About</Link>
          <Link href="/contact" className="hover:text-muted-foreground transition-colors">Contact</Link>
          <Link href="/profile" className="hover:text-muted-foreground transition-colors">Profile</Link>
        </div>
        <button
          className="md:hidden text-foreground focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2">
          <div className="flex flex-col space-y-2">
            <Link href="/" className="hover:text-muted-foreground transition-colors">Home</Link>
            <Link href="/about" className="hover:text-muted-foreground transition-colors">About</Link>
            <Link href="/contact" className="hover:text-muted-foreground transition-colors">Contact</Link>
            <Link href="/profile" className="hover:text-muted-foreground transition-colors">Profile</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
