import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaIdBadge, FaUserAlt, FaLock, FaPhone } from "react-icons/fa";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    idNumber: "",
    username: "",
    phone: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await axios.post("https://loansbackend.onrender.com/signup", formData);
      setSuccess("User registered successfully!");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || "Network error, please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="w-96 bg-gray-800 shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-[poppins] text-white text-center mb-4">Sign Up</h2>
          {error && <p className="text-red-500 text-center">{error}</p>}
          {success && <p className="text-green-500 text-center">{success}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4 relative">
              <FaUser className="absolute left-3 top-3 text-gray-400" />
              <input type="text" name="fullName" placeholder="Full Name" className="w-full pl-10 p-2 bg-gray-700 text-white border border-gray-600 rounded-md" onChange={handleChange} required />
            </div>
            <div className="mb-4 relative">
              <FaIdBadge className="absolute left-3 top-3 text-gray-400" />
              <input type="text" name="idNumber" placeholder="ID Number" className="w-full pl-10 p-2 bg-gray-700 text-white border border-gray-600 rounded-md" onChange={handleChange} required />
            </div>
            <div className="mb-4 relative">
              <FaUserAlt className="absolute left-3 top-3 text-gray-400" />
              <input type="text" name="username" placeholder="Username" className="w-full pl-10 p-2 bg-gray-700 text-white border border-gray-600 rounded-md" onChange={handleChange} required />
            </div>
            <div className="mb-4 relative">
              <FaPhone className="absolute left-3 top-3 text-gray-400" />
              <input type="text" name="phone" placeholder="Phone" className="w-full pl-10 p-2 bg-gray-700 text-white border border-gray-600 rounded-md" onChange={handleChange} required />
            </div>
            <div className="mb-4 relative">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input type="password" name="password" placeholder="Password" className="w-full pl-10 p-2 bg-gray-700 text-white border border-gray-600 rounded-md" onChange={handleChange} required />
            </div>
            <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg">Sign Up</button>
          </form>
          <p className="text-gray-400 text-center mt-4 text-sm">
            Already have an account? <a href="/login" className="text-blue-500">Login</a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;
