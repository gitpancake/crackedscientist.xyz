"use client";

import { useGlitch } from "react-powerglitch";

function StayTuned() {
  const glitch = useGlitch();

  return (
    <div className="flex flex-col w-full justify-center items-center" ref={glitch.ref}>
      <h1 className="text-[32px]">Coming Soon</h1>
      <p>Or am I already here?</p>
    </div>
  );
}

export default StayTuned;
