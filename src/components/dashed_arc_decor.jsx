import React from "react";

function DashedArcDecor({
  radius = 90,
  stroke = "#FEC60F",
  stroke_width = 2.5,
  dash = "6 8",
  position = "bottom",
  left = "8%",
  rotation = 0,
}) {
  const size = radius * 2;

  const wrapper_style = {
    position: "absolute",
    left,
    width: size,
    height: radius,
    overflow: "hidden",
    pointerEvents: "none",
    zIndex: 0,
    ...(position === "bottom"
      ? { bottom: 0 }   
      : { top: 0 }), 
  };

  const svg_style = {
    position: "absolute",
    left: 0,
    top: position === "bottom" ? 0 : -radius,
    transform: `rotate(${rotation}deg)`,
  };

  return (
    <div style={wrapper_style} aria-hidden="true">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={svg_style}
      >
        <circle
          cx={radius}
          cy={radius}
          r={radius - stroke_width}
          fill="none"
          stroke={stroke}
          strokeWidth={stroke_width}
          strokeDasharray={dash}
        />
      </svg>
    </div>
  );
}

export default DashedArcDecor;