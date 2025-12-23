import React from "react";

const Herosection = () => {
  return (
    <div className="relative  ">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="h-[60vh]  w-full  object-fill lg:h-[87vh]"
      >
        <source src="/videos/herovedio.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50"></div>
      <div className="contain absolute inset-0   mt-20 text-center flex justify-start  items-center flex-col    gap-0 text-white leading-relaxed">
        <h1 className="text-xl font-bold "> Welcome to</h1>
        <p className="text-3xl lg:text-6xl font-bold mb-7">
          Emmanuel Alayande University Of Education.
        </p>
        <h5 className="italic animate-pulse text-xl">
          The Best University of The State
        </h5>
        <button className="bg-linear-to-r from-white/40  from-5% via-[#000345] via-30% to-[#000345] to-95% py-3 rounded-sm px-3 font-bold mt-6">
          Explore Programs
        </button>
      </div>
    </div>
  );
};

export default Herosection;
