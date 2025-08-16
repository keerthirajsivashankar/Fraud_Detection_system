import { useState } from "react";
import "./awareness.css";
const awarenessData = [
  {
    icon: "⚠️",
    title: "Phishing Attacks",
    desc: "Fake emails or links tricking users to give card details.",
  },
  {
    icon: "💳",
    title: "Card Skimming",
    desc: "Fraudsters clone card info using hidden devices.",
  },
  {
    icon: "✅",
    title: "Stay Protected",
    desc: "Never share OTP, enable SMS alerts & use secure websites.",
  },
];

export default function AwarenessLanding() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % awarenessData.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + awarenessData.length) % awarenessData.length
    );
  };

  return (
    <div className="awareness-container">
      {/* Hero Section */}
      <h1 className="hero-title">🔐 Credit Card Fraud Awareness</h1>
      <p className="hero-subtitle">
        Learn the most common fraud types and simple steps to stay safe before
        using our detection tool.
      </p>

      {/* Carousel Section */}
      <div className="carousel">
        <div className="carousel-card">
          <span className="carousel-icon">{awarenessData[current].icon}</span>
          <h2>{awarenessData[current].title}</h2>
          <p>{awarenessData[current].desc}</p>
        </div>

        <div className="carousel-buttons">
          <button onClick={prevSlide}>◀</button>
          <button onClick={nextSlide}>▶</button>
        </div>
      </div>

      {/* CTA */}
      <button className="cta-btn">Continue to Fraud Detection →</button>
    </div>
  );
}
