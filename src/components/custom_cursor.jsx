import React, { useEffect, useRef } from "react";
import "../css/custom_cursor.css";

// Elements that trigger the "hover" state — extend this selector list
// as needed, or just add data-cursor-hover to any element you want to target.
const hover_selector = "a, button, input, textarea, select, [role='button'], [data-cursor-hover]";

function custom_cursor() {
  const dot_ref = useRef(null);
  const ring_ref = useRef(null);

  const mouse_pos = useRef({ x: 0, y: 0 });
  const ring_pos = useRef({ x: 0, y: 0 });
  const raf_id = useRef(null);

  useEffect(() => {
    // Only enable on devices with a real mouse — skip on touch devices
    const has_fine_pointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!has_fine_pointer) return;

    document.body.classList.add("custom-cursor-active");

    function handle_mouse_move(e) {
      mouse_pos.current.x = e.clientX;
      mouse_pos.current.y = e.clientY;

      // dot follows instantly — no lag
      if (dot_ref.current) {
        dot_ref.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    }

    function handle_mouse_over(e) {
      if (e.target.closest(hover_selector)) {
        ring_ref.current?.classList.add("cursor-ring-hovering");
      }
    }

    function handle_mouse_out(e) {
      if (e.target.closest(hover_selector)) {
        ring_ref.current?.classList.remove("cursor-ring-hovering");
      }
    }

    function animate_ring() {
      // lerp toward the mouse position — this is what creates the smooth trailing lag
      const ease = 0.15;
      ring_pos.current.x += (mouse_pos.current.x - ring_pos.current.x) * ease;
      ring_pos.current.y += (mouse_pos.current.y - ring_pos.current.y) * ease;

      if (ring_ref.current) {
        ring_ref.current.style.transform = `translate3d(${ring_pos.current.x}px, ${ring_pos.current.y}px, 0) translate(-50%, -50%)`;
      }

      raf_id.current = requestAnimationFrame(animate_ring);
    }

    window.addEventListener("mousemove", handle_mouse_move);
    document.addEventListener("mouseover", handle_mouse_over);
    document.addEventListener("mouseout", handle_mouse_out);
    raf_id.current = requestAnimationFrame(animate_ring);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handle_mouse_move);
      document.removeEventListener("mouseover", handle_mouse_over);
      document.removeEventListener("mouseout", handle_mouse_out);
      cancelAnimationFrame(raf_id.current);
    };
  }, []);

  return (
    <>
      <div className="custom-cursor-dot" ref={dot_ref} aria-hidden="true"></div>
      <div className="custom-cursor-ring" ref={ring_ref} aria-hidden="true"></div>
    </>
  );
}

export default custom_cursor;