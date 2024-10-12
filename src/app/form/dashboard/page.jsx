'use client';
import { PlusIcon } from 'lucide-react';
import { nanoid } from 'nanoid';
import { useRouter } from 'next/navigation'; // Use useRouter for client-side navigation
import React from 'react';

function Page() {
  const router = useRouter();

  const handleCreateFormClick = () => {
    const id = nanoid();
    console.log("Form ID created:", id);
    router.push(`/createform/${id}`); // Redirect to form creation page with the unique ID
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={handleCreateFormClick}
            className="flex items-center justify-center bg-blue-500 text-white w-20 h-20 rounded-lg hover:bg-blue-600 transition-colors duration-200"
          >
            <PlusIcon className="h-10 w-10" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
