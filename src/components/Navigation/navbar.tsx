'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowBigLeft, ArrowUp01, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border-b bg-background text-foreground h-16  px-8">
      <div className="flex items-center justify-between h-full">
        <div className="text-lg font-bold">
          <Link href="/" className="text-primary">FormEdge</Link>
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/template" className="hover:text-muted-foreground transition-colors">Templates</Link>
          <Link href="/whatsnew" className="hover:text-muted-foreground transition-colors">What's new?</Link>
          <Link href="/pricing" className="hover:text-muted-foreground transition-colors">Pricing</Link>
          <Link href="/help" className="hover:text-muted-foreground transition-colors">Help</Link>
          <Link href={'/login'}> <button className='btn bg-blue-600 text-white dark:bg-blue-400'>Login<span><ArrowUpRight /></span></button></Link>
          <Link href={'/form/dashboard'}> <button className='btn  text-blue-600 border-blue-500'>Create a form <span><ArrowUpRight /></span></button></Link>

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
