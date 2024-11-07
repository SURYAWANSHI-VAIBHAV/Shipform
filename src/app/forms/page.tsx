'use client'
import React, { useState } from 'react';
import FormBuilder from '../../components/FormBuilder/formbuilder';
import Formnav from '@/components/Navigation/formnav';

function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-gray-50 dark:bg-neutral-900 text-black">
      <Formnav />
      <main className={``}>
        <FormBuilder />
      </main>
    </div>
  );
}

export default Page;
