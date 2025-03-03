import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  // Password visible by default
  const [showPassword, setShowPassword] = useState(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await axios.post("https://loansbackend.onrender.com/login", formData);
      setSuccess("Login successful!");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || "Network error, please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="w-96 bg-gray-800 shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-[poppins] text-white text-center mb-4">Login</h2>
          {error && <p className="text-red-500 text-center">{error}</p>}
          {success && <p className="text-green-500 text-center">{success}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4 relative">
              <FaUser className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="w-full pl-10 p-2 bg-gray-700 text-white border border-gray-600 rounded-md"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4 relative">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="w-full pl-10 pr-10 p-2 bg-gray-700 text-white border border-gray-600 rounded-md"
                onChange={handleChange}
                required
              />
              <div className="absolute right-3 top-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash className="text-gray-400" /> : <FaEye className="text-gray-400" />}
              </div>
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
              Login
            </button>
          </form>
          <p className="text-gray-400 text-center mt-4 text-sm">
            Don't have an account? <a href="/signup" className="text-blue-500">Sign up</a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;


