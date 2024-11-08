'use client'
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';

function Formnav() {
  const [activeTab, setActiveTab] = useState('questions'); // default to 'questions'
  const {id}=useParams()
  return (
    <div className="navbar border-b bg-neutral-100 shadow-xl text-black">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
        </div>
        <a className="text-xl font-semibold pl-10">Form Edge</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <div role="tablist" className="tabs tabs-boxed">
          <Link
            href={`/forms/${id}`}
            role="tab"
            className={`tab ${activeTab === 'questions' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('questions')}
          >
            Questions
          </Link>
          <Link
            href={`/forms/analytics/${id}`}
            role="tab"
            className={`tab ${activeTab === 'responses' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('responses')}
          >
            Responses
          </Link>
          <Link
            href={`/forms/settings/${id}`}
            role="tab"
            className={`tab ${activeTab === 'settings' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            Settings
          </Link>
        </div>
      </div>

      {/* Preview Button */}
      <div className="navbar-end md:pr-14">
        <a href="/dashboard" className='btn btn-primary mr-2'>Dashboard</a>
        <a className="btn text-white">Preview</a>
      </div>
    </div>
  );
}

export default Formnav;
