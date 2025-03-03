import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LoanPage = () => {
  const navigate = useNavigate();
  const [selectedAmount, setSelectedAmount] = useState(null);

  const amounts = [
    { value: 1500, label: "Ksh. 1500" },
    { value: 5000, label: "Ksh. 5000" },
    { value: 10000, label: "Ksh. 10,000" },
    { value: 20000, label: "Ksh. 20,000" },
    { value: 30000, label: "Ksh. 30,000" },
    { value: 50000, label: "Ksh. 50,000" },
    { value: 100000, label: "Ksh. 100,000" },
    { value: 200000, label: "Ksh. 200,000" }
  ];

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    navigate("/loan-processing", { state: { amount } });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl bg-gray-800 shadow-lg rounded-2xl p-6 mx-4"
      >
        <h2 className="text-2xl font-[poppins] text-yellow-400 text-center mb-4">
          Select Loan Amount
        </h2>
        <p className="text-gray-300 text-center mb-6">
          Choose the amount you wish to borrow:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {amounts.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAmountClick(option)}
              className={`py-3 px-4 rounded-lg border text-yellow-300 transition 
                ${
                  selectedAmount?.value === option.value
                    ? "bg-green-600 border-green-600 hover:bg-green-500"
                    : "bg-gray-700 border-gray-600 hover:bg-gray-600"
                }`}
            >
              {option.label}
            </button>
          ))}
        </div>
        {selectedAmount && (
          <p className="text-green-400 text-center mt-6">
            You selected: {selectedAmount.label}
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default LoanPage;


