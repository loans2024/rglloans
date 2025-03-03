import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaIdBadge, FaUserAlt, FaLock } from "react-icons/fa";

const Signup = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-96 bg-gray-800 shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-[Poppins] text-white text-center mb-4">
            Sign Up
          </h2>
          <div className="mb-4 relative">
            <FaUser className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full pl-10 p-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-gray-500"
            />
          </div>
          <div className="mb-4 relative">
            <FaIdBadge className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="ID Number"
              className="w-full pl-10 p-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-gray-500"
            />
          </div>
          <div className="mb-4 relative">
            <FaUserAlt className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Username"
              className="w-full pl-10 p-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-gray-500"
            />
          </div>
          <div className="mb-4 relative">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 p-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-gray-500"
            />
          </div>
          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg">
            Sign Up
          </button>
          <p className="text-gray-400 text-center mt-4 text-sm">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500">
              Login
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;
