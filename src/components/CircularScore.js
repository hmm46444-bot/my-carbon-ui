import React from "react";
import "./CircularScore.css";

export default function CircularScore({ value }) {
  const radius = 60;
  const stroke = 10;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="circular-score">
      <svg
        height={radius * 2}
        width={radius * 2}
      >
        <circle
          stroke="#e0e0e0"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#24a148"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset }}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <div className="circular-score-text">
        {value}%
      </div>
      <div className="circular-score-label">Value Score</div>
    </div>
  );
}
