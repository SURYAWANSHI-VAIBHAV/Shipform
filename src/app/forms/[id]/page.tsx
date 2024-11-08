'use client'
import React, { useState } from 'react';
import FormBuilder from '../../../components/FormBuilder/formbuilder';
import { useParams } from 'next/navigation';

function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const {id}=useParams()
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-gray-50 dark:bg-neutral-900 text-black min-h-screen">
      <main className={``}>
        <FormBuilder formId={id}/>
      </main>
    </div>
  );
}

export default Page;
