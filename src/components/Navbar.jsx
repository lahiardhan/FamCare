import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <div className="z-50 absolute">
      <nav className={`z-50 fixed top-0 w-full flex flex-wrap items-center ${navbarOpen ? 'shadow-2xl' : 'shadow-none'} bg-gradient-to-r from-primary-color to-secondary-color text-white p-4 lg:px-20 xl:px-32 justify-between`}>
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <h1 className="text-xl font-bold inline-block mr-4 py-2 whitespace-nowrap  ">
            FamCare
          </h1>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path className={!navbarOpen ? 'block' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              <path className={navbarOpen ? 'block' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className={`lg:flex flex-grow items-center${navbarOpen ? ' flex ' : ' hidden'}`}>
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto text-sm font-semibold ">
            <li className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <Link to="/" className="flex items-center px-3 py-2 hover-link duration-300">Home</Link>
            </li>
            <li>
              <Link to="/test" className="flex items-center px-3 py-2 hover-link duration-300">Anxiety Test</Link>
            </li>
            <li>
              <Link to="/article" className="flex items-center px-3 py-2 hover-link duration-300">Article</Link>
            </li>
            <li>
              <Link to="/forum" className="flex items-center px-3 py-2 hover-link duration-300">Forum</Link>
            </li>
            <li>
              <Link to="/about" className="flex items-center px-3 py-2 hover-link duration-300">About Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;