import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-900 p-4 relative">
        <div className="container mx-auto flex justify-center">
          <h1 className="text-white font-[Poppins] text-2xl">RGL LOAN APP</h1>
        </div>
        <div className="absolute right-4 top-4 font-[Poppins]">
          <Link to="/login" className="text-gray-300 hover:text-white mx-2">
            Login
          </Link>
          <Link to="/signup" className="text-gray-300 hover:text-white mx-2 font-[Poppins]">
            Sign Up
          </Link>
        </div>
      </nav>
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-300 font-[Poppins] text-1xl">
            Experience effortless borrowing – fast approvals with zero paperwork.
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;

