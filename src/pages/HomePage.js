import React from "react";

export default function HomePage() {
  return (
    <div className="home-page">
      <div className="home-content">
        {/* Use home.png for the center image */}
        <img src="/home.png" alt="Home" className="home-image" />
      </div>

      <div className="footer">
        Powered by <span className="watson">watsonx</span>
      </div>
    </div>
  );
}
