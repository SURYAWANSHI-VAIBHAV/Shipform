import React from 'react'

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
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>

        </div>
        <a className="btn btn-ghost text-xl">ShipForm</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div role="tablist" className="tabs tabs-boxed">
          <a role="tab bg-green-200" className="tab">Tab 1</a>
          <a role="tab" className="tab tab-active">Tab 2</a>
          <a role="tab" className="tab">Tab 3</a>
        </div>
      </div>
      <div className="navbar-end">
        <a className="btn">Preview</a>
      </div>
    </div>
  )
}

export default Formnav
