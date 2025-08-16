import React, { useState } from "react";
import ResultAnalysis from "./ResultAnalysis";
import "./form.css";

const DummyForm = () => {
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // dummy random result
    const isFraud = Math.random() > 0.5;
    setResult(isFraud ? "fraud" : "legit");
  };

  return (
    <div>
      {/* Form Section */}
      <div className="form-container">
        <h1 className="form-title">Fraud Detection Tool</h1>
        <p className="form-subtitle">
          Enter details below to test our fraud detection system
        </p>

        <form className="fraud-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Card Number</label>
            <input type="text" placeholder="XXXX-XXXX-XXXX-1234" />
          </div>

          <div className="form-group">
            <label>Transaction Amount</label>
            <input type="number" placeholder="Enter amount" />
          </div>

          <div className="form-group">
            <label>Location</label>
            <input type="text" placeholder="Enter location" />
          </div>

          <div className="form-group">
            <label>Transaction Type</label>
            <select>
              <option value="">Select type</option>
              <option value="online">Online</option>
              <option value="pos">Point of Sale</option>
              <option value="atm">ATM Withdrawal</option>
            </select>
          </div>

          <button type="submit" className="submit-btn">
            Check for Fraud
          </button>
        </form>
      </div>

      {/* Result Section */}
      <ResultAnalysis result={result} />
    </div>
  );
};

export default DummyForm;
