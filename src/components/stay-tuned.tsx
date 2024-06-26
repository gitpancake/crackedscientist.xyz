"use client";

import { useGlitch } from "react-powerglitch";

function StayTuned() {
  const glitch = useGlitch();

  return (
    <h1 ref={glitch.ref} className="text-[32px]">
      Coming Soon
    </h1>
  );
}

export default StayTuned;
