import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Nav2 = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
        <nav className="relative bg-[#15396D] flex flex-wrap items-center shadow-xl justify-between px-2 py-3  mb-3">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <Link
                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
               to='/'
              >
                Home For Rent
              </Link>
              <button
                className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <FaBars></FaBars>
              </button>
            </div>
            <div
              className={
                "lg:flex flex-grow items-center" +
                (navbarOpen ? " flex" : " hidden")
              }
              id="example-navbar-danger"
            >
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    to='/'
                  >
                   <span className="md:ml-96 lg:ml-2 ">Home</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    to='/all-services'
                  >
                   <span className="md:ml-96 lg:ml-2 ">All Services</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    to='/contactMessage'
                  >
                    <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="md:ml-96 lg:ml-2">Contact</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    to='/blog'
                  >
                    <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="md:ml-96 lg:ml-2">Blog</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    to='/about-us'
                  >
                    <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="md:ml-96 lg:ml-2">About Us</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    to='/dashboard'
                  >
                    <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="md:ml-96 lg:ml-2">Dashboard</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    to='/login'
                  >
                    <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="md:ml-96 lg:ml-2">Login</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    to='/register'
                  >
                    <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="md:ml-96 lg:ml-2">Register</span>
                  </Link>
                </li>
              
              
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
};

export default Nav2;