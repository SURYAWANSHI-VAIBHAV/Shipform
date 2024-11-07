'use client'
import Link from 'next/link';
import React from 'react';

function Nav() {
  return (
    <div className='fixed w-full z-50'>
      <header className="flex flex-wrap py-1 md:justify-start md:flex-nowrap z-50 w-full bg-white border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
        <nav className="relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-2 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center gap-x-1">
            <Link className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white" href={"/"} aria-label="Brand">FormEdge</Link>

            <button type="button" className="md:hidden relative size-9 flex justify-center items-center font-medium text-[12px] rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
              <svg className="hs-collapse-open:hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>

          <div className="md:flex md:items-center gap-6">
            <Link className="p-2 text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href={"/dashboard"}>Dashboard</Link>
            <Link className="p-2 text-sm text-gray-800 border px-2 hover:bg-gray-100 rounded-lg focus:outline-none dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href={"/auth/signin"}>Sign In</Link>
            <Link className="p-2 text-sm text-white bg-blue-500 rounded-lg focus:outline-none dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href={"/forms"}>Create a Form</Link>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
