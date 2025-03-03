import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import LoanPurpose from "./components/LoanPurpose"; // Import the new component
import LoanPage from "./components/LoanPage"; // Import the new component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/loan-purpose" element={<LoanPurpose />} />
        <Route path="/loan-page" element={<LoanPage />} />
        {/* Default route */}
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

