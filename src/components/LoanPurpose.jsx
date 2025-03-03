import React, { useState } from "react";
import { motion } from "framer-motion";

const LoanPurpose = () => {
  const [selected, setSelected] = useState("");

  const options = [
    { value: "business", label: "Business" },
    { value: "education", label: "Education" },
    { value: "emergency", label: "Emergency" },
    { value: "others", label: "Others" },
  ];

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-96 bg-gray-800 shadow-lg rounded-2xl p-6"
      >
        <h2 className="text-2xl font-[poppins] text-white text-center mb-4">
          Select Loan Purpose
        </h2>
        <p className="text-gray-300 text-center mb-6">
          Please select the purpose of your loan:
        </p>
        <div className="flex flex-col space-y-4">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => setSelected(option.value)}
              className={`w-full py-2 rounded-lg border text-white transition 
                ${
                  selected === option.value
                    ? "bg-green-600 border-green-600 hover:bg-green-500"
                    : "bg-gray-700 border-gray-600 hover:bg-gray-600"
                }`}
            >
              {option.label}
            </button>
          ))}
        </div>
        {selected && (
          <p className="text-green-400 text-center mt-6">
            You selected:{" "}
            {selected.charAt(0).toUpperCase() + selected.slice(1)}
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default LoanPurpose;
