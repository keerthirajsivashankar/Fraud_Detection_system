import React, { useState } from "react";
import "./simuate.css";

const scenarios = [
  {
    title: "Phishing Email",
    description:
      "You receive an email from a fake bank asking you to 'verify your account' by entering your card details. The link takes you to a fake website.",
    tip: "✅ Always check the sender's email and never enter details on unknown links.",
  },
  {
    title: "ATM Skimming",
    description:
      "A skimming device is attached to an ATM machine. When you swipe your card, the fraudster copies the card details without you knowing.",
    tip: "✅ Always check the ATM card slot for tampering before inserting your card.",
  },
  {
    title: "Fake Shopping Website",
    description:
      "A site offers heavy discounts on electronics. After you enter your card info, the site vanishes, and your money is gone.",
    tip: "✅ Shop only on trusted, secure websites (look for HTTPS).",
  },
];

export default function SimulatedCases() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextCase = () => {
    setActiveIndex((prev) => (prev + 1) % scenarios.length);
  };

  const prevCase = () => {
    setActiveIndex((prev) => (prev === 0 ? scenarios.length - 1 : prev - 1));
  };

  const { title, description, tip } = scenarios[activeIndex];

  return (
    <div className="simulated-container" id="simulated-cases">
      <h1 className="simulated-title">🔍 Simulated Fraud Scenarios</h1>
      <div className="simulated-card">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="tip-box">{tip}</div>
        <div className="simulated-buttons">
          <button onClick={prevCase}>⬅ Prev</button>
          <button onClick={nextCase}>Next ➡</button>
        </div>
      </div>
    </div>
  );
}
