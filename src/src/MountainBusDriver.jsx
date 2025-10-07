import React, { useState } from "react";

function MountainBusDriver() {
  const [view, setView] = useState("outside");
  const [level, setLevel] = useState(1);
  const [traffic, setTraffic] = useState(true);

  const nextLevel = () => {
    if (level < 100) setLevel(level + 1);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>🚌 डोंगरावरील बसचालक - Level {level}</h1>
      <p>रस्ता: डोंगर, ट्रॅफिक: {traffic ? "हो" : "नाही"}</p>
      <button onClick={() => setView(view === "inside" ? "outside" : "inside")}>
        दृश्य बदला ({view === "inside" ? "बाहेरून" : "आतून"})
      </button>
      <br /><br />
      <button onClick={nextLevel}>पुढचा लेव्हल</button>
    </div>
  );
}

export default MountainBusDriver;
