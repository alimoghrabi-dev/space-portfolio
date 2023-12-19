import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        src="/blackhole.webm"
        typeof="video/webm"
        className="rotate-180 absolute -top-[260px] sm:-top-[340px] left-0 z-1 w-full h-full object-cover mt-0 lg:mt-10"
      />
      <HeroContent />
    </div>
  );
};

export default Hero;
