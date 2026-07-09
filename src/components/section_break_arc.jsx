import React from "react";

function SectionBreakArc({
  radius = 175,
  stroke = "#FEC60F",
  stroke_width = 2.5,
  dash = "8 8",
  start_angle = -100,
  end_angle = 190,
  top = 0,
  left = "4%",
  rotation = 0,
  z_index = 0,
}) {
  const size = radius * 2;
  const cx = radius;
  const cy = radius;

  function polar_to_cartesian(angle_deg) {
    const angle_rad = (angle_deg * Math.PI) / 180;
    return {
      x: cx + radius * Math.cos(angle_rad),
      y: cy + radius * Math.sin(angle_rad),
    };
  }

  const start_point = polar_to_cartesian(start_angle);
  const end_point = polar_to_cartesian(end_angle);
  const sweep_degrees = end_angle - start_angle;
  const large_arc_flag = sweep_degrees > 180 ? 1 : 0;

  const path_d = `M ${start_point.x} ${start_point.y} A ${radius} ${radius} 0 ${large_arc_flag} 1 ${end_point.x} ${end_point.y}`;

  const wrapper_style = {
    position: "absolute",
    top,
    left,
    width: size,
    height: size,
    pointerEvents: "none",
    zIndex: z_index,
    overflow: "visible",
    transform: `rotate(${rotation}deg)`,
    transformOrigin: "center center",
  };

  return (
    <div style={wrapper_style} aria-hidden="true">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ overflow: "visible" }}>
        <path
          d={path_d}
          fill="none"
          stroke={stroke}
          strokeWidth={stroke_width}
          strokeDasharray={dash}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default SectionBreakArc;