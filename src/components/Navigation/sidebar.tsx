import React from 'react';
import { FaHome, FaCog, FaUser } from 'react-icons/fa'; // Using icons for the sidebar items

const Sidebar = ({ isSidebarOpen, toggleSidebar }: { isSidebarOpen: boolean; toggleSidebar: () => void }) => {
  return (
    <div
      className={`fixed top-0 left-0 z-50 w-64 h-full bg-gray-800 text-white transition-transform transform ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex justify-between items-center p-4">
        <h2 className="text-xl">Sidebar</h2>
        <button onClick={toggleSidebar} className="text-white">
          X
        </button>
      </div>
      <ul className="p-4 space-y-4">
        <li className="flex items-center space-x-2">
          <FaHome />
          <span>Home</span>
        </li>
        <li className="flex items-center space-x-2">
          <FaUser />
          <span>Profile</span>
        </li>
        <li className="flex items-center space-x-2">
          <FaCog />
          <span>Settings</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
