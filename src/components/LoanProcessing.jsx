import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const LoanProcessing = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState("");

  const selectedAmount = location.state?.amount || { label: "N/A" };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!mobileNumber.match(/^\d{10}$/)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setError("");
    // Proceed to the next step (e.g., confirming loan request)
    alert(`Loan request for ${selectedAmount.label} submitted with mobile number: ${mobileNumber}`);
    navigate("/loan-confirmation");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 shadow-lg rounded-2xl p-6 mx-4">
        <h2 className="text-2xl font-[poppins] text-yellow-400 text-center mb-4">
          Loan Processing
        </h2>
        <p className="text-gray-300 text-center mb-6">
          Enter your mobile number for loan processing.
        </p>
        <p className="text-green-400 text-center mb-4">
          Loan Amount: {selectedAmount.label}
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="tel"
            placeholder="Enter your mobile number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {error && <p className="text-red-400 text-center">{error}</p>}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-500 transition"
          >
            Submit Loan Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoanProcessing;
