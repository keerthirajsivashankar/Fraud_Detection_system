import React from "react";
import "./resultAnalysis.css";

const ResultAnalysis = ({ result }) => {
  return (
    <section className="result-section">
      <h2 className="result-title">Result Analysis</h2>
      {!result && (
        <p className="result-placeholder">
          Submit the form to see results here.
        </p>
      )}

      {result && (
        <div
          className={`result-card ${
            result === "fraud" ? "fraud-result" : "legit-result"
          }`}
        >
          {result === "fraud"
            ? "⚠️ Fraud Detected!"
            : "✅ Transaction is Legit"}
        </div>
      )}
    </section>
  );
};

export default ResultAnalysis;
