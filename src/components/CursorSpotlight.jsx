import { useEffect, useState } from "react";

/**
 * A glowing orb that follows the cursor — gives a premium interactive feel.
 * Only renders on non-touch devices.
 */
export const CursorSpotlight = () => {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Don't render on touch-only devices
    if (window.matchMedia("(hover: none)").matches) return;

    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const hide = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", hide);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", hide);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[9999] transition-opacity duration-300"
      style={{ opacity: visible ? 1 : 0 }}
    >
      {/* Outer soft glow */}
      <div
        style={{
          position: "fixed",
          left: pos.x - 300,
          top: pos.y - 300,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
          transition: "left 0.12s ease, top 0.12s ease",
        }}
      />
      {/* Inner sharp dot */}
      <div
        style={{
          position: "fixed",
          left: pos.x - 6,
          top: pos.y - 6,
          width: 12,
          height: 12,
          borderRadius: "50%",
          background: "rgba(139,92,246,0.6)",
          boxShadow: "0 0 16px 4px rgba(139,92,246,0.4)",
          pointerEvents: "none",
          transition: "left 0.06s ease, top 0.06s ease",
        }}
      />
    </div>
  );
};
