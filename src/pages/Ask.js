// import React, { useEffect, useRef } from "react";

// export default function Ask() {
//   const iframeRef = useRef(null);
//   const initialInput = "Value Score"; // always send this

//   useEffect(() => {
//     const iframe = iframeRef.current;
//     if (!iframe) return;

//     const handleLoad = () => {
//       // Wait a tiny bit after load to ensure Assistant is ready
//       setTimeout(() => {
//         iframe.contentWindow.postMessage(
//           {
//             type: "send-message",
//             message: initialInput,
//           },
//           "*"
//         );
//       }, 500); // 500ms delay
//     };

//     iframe.addEventListener("load", handleLoad);

//     return () => {
//       iframe.removeEventListener("load", handleLoad);
//     };
//   }, [initialInput]);

//   return (
//     <div className="ask-page" style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
//       <div
//         className="ask-content"
//         style={{
//           flex: 1,
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <iframe
//           ref={iframeRef}
//           title="Watson Assistant"
//           src="https://web-chat.global.assistant.watson.appdomain.cloud/preview.html?integrationID=2ad903bf-6736-4d30-986e-84ed3835d14b&region=wxo-us-south&serviceInstanceID=aa25fca5-98e0-4f3f-905b-20a6245f7d9a"
//           style={{
//             width: "400px",
//             height: "600px",
//             border: "none",
//             borderRadius: "12px",
//             boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
//           }}
//         />
//       </div>

//       <div className="footer" style={{ textAlign: "center", padding: "10px" }}>
//         Powered by <span className="watson">watsonx</span>
//       </div>
//     </div>
//   );
// }
import React from "react";

export default function Ask() {
  return (
    <div
      className="ask-page"
      style={{ height: "100vh", display: "flex", flexDirection: "column" }}
    >
      <div
        className="ask-content"
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Assistant Image only */}
        <img
          src="assistant.png" // make sure assistant.png is in public/ folder
          alt="Assistant"
          style={{
            width: "400px",
            height: "600px",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            objectFit: "cover",
          }}
        />
      </div>

      <div className="footer" style={{ textAlign: "center", padding: "10px" }}>
        Powered by <span className="watson">watsonx</span>
      </div>
    </div>
  );
}
