import React from 'react';

function Formnav() {
  return (
    <div className="navbar border-b bg-neutral-100 shadow-xl">
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
        <a className="text-xl font-semibold pl-10 ">Form Edge</a> 
      </div>

      <div className="navbar-center hidden lg:flex">
        <div role="tablist" className="tabs tabs-boxed">
          <a role="tab" className="tab">
            Questions
          </a>
          <a role="tab" className="tab tab-active">
            Responses
          </a>
          <a role="tab" className="tab">
            Settings
          </a>
        </div>
      </div>

      {/* Preview Button */}
      <div className="navbar-end">
        <a className="btn  text-white">Preview</a>
      </div>
    </div>
  );
}

export default Formnav;
