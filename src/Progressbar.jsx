import React, { useState, useEffect } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Loading");

  useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          const next = prev + 1;
          if (next >= 100) {
            setStatus("Complete");
            clearInterval(interval);
          }
          return next;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [progress]);

  return (
    <div style={{ width: "80%", margin: "40px auto", textAlign: "center" }}>
      <h2>Progress Bar</h2>
      <div
        style={{
          width: "100%",
          height: "30px",
          backgroundColor: "#eee",
          borderRadius: "20px",
          overflow: "hidden",
          border: "2px solid #ccc",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            backgroundColor: "#4caf50",
            transition: "width 0.2s ease-in-out",
          }}
        ></div>
      </div>
      <p style={{ marginTop: "10px" }}>{progress}%</p>
      <p>Status: {status}</p>
    </div>
  );
};

export default ProgressBar;
