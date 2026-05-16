import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] =
    useState({
      x: 0,
      y: 0,
    });

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener(
      "mousemove",
      move
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        move
      );
  }, []);

  return (
    <div
      className="
      fixed
      pointer-events-none
      z-[998]

      w-[400px]
      h-[400px]

      rounded-full

      blur-[120px]

      opacity-20
      "
      style={{
        left: position.x - 200,
        top: position.y - 200,

        background:
          "radial-gradient(circle, rgba(212,175,55,0.6) 0%, transparent 70%)",
      }}
    />
  );
}