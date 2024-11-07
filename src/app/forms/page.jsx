'use client'
import React, { useState } from 'react';
import FormBuilder from '../../components/FormBuilder/formbuilder';
import Formnav from '@/components/Navigation/formnav';
import Sidebar from '@/components/Navigation/sidebar';

function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-gray-50 dark:bg-neutral-900 text-black">
      <Formnav />

      {/* <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} /> */}

      {/* Main content */}
      <main className={``}>
       
        <FormBuilder />
      </main>
    </div>
  );
}

export default Page;
