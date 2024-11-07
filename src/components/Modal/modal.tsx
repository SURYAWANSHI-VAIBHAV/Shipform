'use client'// Modal component to show the success message and share link
import React from 'react';
import { FaCopy } from 'react-icons/fa';

function Modal({ show, onClose, shareLink }:any) {
  // Handle copy to clipboard action
  const handleCopyClick = () => {
    navigator.clipboard.writeText(shareLink)
  };

  if (!show) return null; // Don't render if the modal is not open

  return (
    <div className="hs-overlay fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">&times;</button>
        </div>
        <h2 className="text-xl font-bold mb-4">Form Successfully Created!</h2>
        <p className="text-gray-700 mb-4">Your form has been successfully created. You can share it using the link below:</p>
        <div className="mb-4 flex gap-4 p-2 rounded-md border-b border-2">
          <p>
            {shareLink}
          </p>
          <button
          onClick={handleCopyClick}
          className=" text-blue-400  hover:text-blue-700"
        >
          <FaCopy/>
        </button>
        </div>
        
      </div>
    </div>
  );
}

export default Modal;