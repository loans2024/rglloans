import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const LoanProcessing = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Assume selected loan amount comes via location.state (e.g., from LoanPage)
  const selectedAmount = location.state?.amount || { label: "N/A" };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate that the phone number is exactly 10 digits (local format)
    if (!mobileNumber.match(/^\d{10}$/)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }
    
    setError("");
    setLoading(true);

    try {
      // Call the backend endpoint to initiate the STK push
      const response = await axios.post("http://localhost:3000/api/stkpush", {
        phoneNumber: mobileNumber,           // e.g., "0712832145"
        accountReference: "ClientName"         // You can pass a dynamic client name if available
      });
      
      // Notify the user and redirect to a confirmation page
      alert("M-Pesa prompt initiated. Please check your phone to complete the payment of Ksh. 100.");
      navigate("/loan-confirmation");
    } catch (err) {
      console.error(err);
      setError("Failed to initiate M-Pesa payment. Please try again.");
    } finally {
      setLoading(false);
    }
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
            disabled={loading}
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-500 transition"
          >
            {loading ? "Processing..." : "Submit Loan Request"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoanProcessing;
