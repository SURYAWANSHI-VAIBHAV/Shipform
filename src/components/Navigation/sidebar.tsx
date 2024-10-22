'use client';

import { useState } from 'react';
import { PlusIcon, EyeIcon, SaveIcon, CogIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import Navbar from '@/components/Navigation/navbar';

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`bg-gray-800 text-white ${isCollapsed ? 'w-16' : 'w-64'} transition-all duration-300`}>
        {/* <div className="flex justify-between items-center px-4 py-4">
          <h1 className={`text-2xl font-bold ${isCollapsed && 'hidden'}`}>Form Builder</h1>
          <button
            className="text-gray-400 hover:text-white transition-colors duration-200"
            onClick={toggleSidebar}
          >
            {isCollapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </button>
        </div> */}

        <nav className="mt-10">
          <SidebarItem icon={<PlusIcon />} text="Create Form" isCollapsed={isCollapsed} />
          <SidebarItem icon={<CogIcon />} text="Form Settings" isCollapsed={isCollapsed} />
          <SidebarItem icon={<EyeIcon />} text="Preview" isCollapsed={isCollapsed} />
          <SidebarItem icon={<SaveIcon />} text="Save Form" isCollapsed={isCollapsed} />
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 bg-gray-100">
        {/* <h1 className="text-4xl font-bold mb-6">Form Builder Dashboard</h1> */}
        {/* <p className="text-lg">This is where your form content will be built and previewed.</p> */}
        {/* Your form builder main content goes here */}
      </div>
    </div>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  isCollapsed: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, isCollapsed }) => {
  return (
    <div className="flex items-center p-4 cursor-pointer hover:bg-gray-700">
      <div className="text-xl">{icon}</div>
      {!isCollapsed && <span className="ml-4 text-lg">{text}</span>}
    </div>
  );
};

export default Sidebar;
