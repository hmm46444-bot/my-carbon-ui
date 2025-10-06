import React from "react";
import "./Timeline.css";
export default function Timeline() {
  return (
    <div className="timeline">
      <div className="home-content">
        {/* Timeline wrapper */}
        <div className="timeline-wrapper">
          {/* Profile image (above timeline image) */}
          <img
            src="/transparent-profile.png" 
            alt="Profile"
            className="profile-image"
          />

          {/* Main timeline image */}
          <img
            src="Timeline1.png"
            alt="Timeline"
            className="timeline-image"
          />
        </div>
      </div>

      <div className="footer">
        Powered by <span className="watson">watsonx</span>
      </div>
    </div>
  );
}
