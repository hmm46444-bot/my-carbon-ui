// import React from "react";
// import GaugeChart from "react-gauge-chart";
// import "./ValueScore.css";

// export default function ValueScore() {
//   return (
//     <div className="value-score-container">
//       <GaugeChart
//         id="value-gauge"
//         // nrOfLevels={1}                     // two segments
//         colors={["#0d7e0d", "#808080"]}    // green + grey
//         arcsLength={[0.92, 0.08]}           // 92% green, 8% grey
//         arcPadding={0}                      // remove gap between segments
//         arcWidth={0.15}
//         percent={0.92}                      // actual value
//         textColor="#000"
//         needleColor="transparent"
//         animate={false}
//       />
//       <button className="value-score-btn">⚙ Value Score</button>
//     </div>
//   );
// }
import React from "react";
import GaugeChart from "react-gauge-chart";
import "./ValueScore.css";

export default function ValueScore() {
  return (
    <div className="value-score-container">
      <div className="gauge-wrapper">
        <GaugeChart
          id="value-gauge"
          colors={["#0d7e0d", "#808080"]}
          arcsLength={[0.92, 0.08]}
          arcPadding={0}
          arcWidth={0.15}
          percent={0.92}
          textColor="#000"
          needleColor="transparent"
          animate={false}
        />
      </div>
      <button className="value-score-btn">⚙ Value Score</button>
    </div>
  );
}
