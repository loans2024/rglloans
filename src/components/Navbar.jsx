import React from 'react';

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-900 p-4">
        <div className="container mx-auto flex justify-center">
          <h1 className="text-white font-[Poppins] text-2xl">
            RGL LOAN APP
          </h1>
        </div>
      </nav>
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-300 font-[Poppins] text-lg">
            Experience effortless borrowing – fast approvals with zero paperwork.
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;



