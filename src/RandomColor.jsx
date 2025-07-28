import React, { useState } from "react";

const RandomColor = () => {
  const [colortype, setColortype] = useState("Hex");
  const [color, setColor] = useState("#000000");

  const randomColorUtility = (len) => {
    return Math.floor(Math.random() * len);
  };

  const randomHexColor = () => {
    const hexValue = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let hex = "#";
    for (let i = 0; i < 6; i++) {
      hex += hexValue[randomColorUtility(hexValue.length)];
    }
    setColor(hex);
  };

  const randomRgbColor = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    setColor(`rgb(${r}, ${g}, ${b})`);
  };

  return (
    <div style={{ alignItems: "center", height: "100vh", display: "flex" }}>
      <div
        style={{
          textAlign: "center",
          width: "100%",
          height: "100%",
          backgroundColor: color,
          display: "flex",
        }}
      >
        <button onClick={() => setColortype("Hex")}>Change to Hex color</button>
        <button onClick={() => setColortype("RGB")}>Change to RGB color</button>
        <button onClick={colortype === "Hex" ? randomHexColor : randomRgbColor}>
          Generate Random color
        </button>
        <div style={{ marginTop: "20px", fontSize: "24px" }}>
          {colortype} Color: {color}
        </div>
      </div>
    </div>
  );
};

export default RandomColor;
