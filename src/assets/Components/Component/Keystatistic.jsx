import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Keystatistic = () => {
   useEffect(() => {
      ScrollReveal().reveal(".reveal", {
        distance: "600px",
        duration: 2000,
        easing: "ease-out",
        origin: "bottom",
        interval: 600,
        reset: false,
      });
    }, []);
  return (
    <div className="py-10 bg-black/10 pb-20">
      <h1 className="text-center font-bold text-5xl py-4 pb-5">
        Our Statistics
      </h1>
      <div className="reveal contains grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 pt-5">
        <div className="flex flex-col justify-center items-center bg-[#000345] gap-3  rounded py-3 px-3 hover:-translate-y-2 transition-all duration-150">
          <h1 className="text-white text-2xl font-bold text-center italic">
            No. of students per staff
          </h1>
          <h1 className="font-bold text-gray-400 text-3xl shadow-blue-300">
            40
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center bg-[#000345] gap-3  rounded py-3 px-3 hover:-translate-y-2 transition-all duration-150">
          <h1 className="text-white text-2xl font-bold text-center italic">
            Percentage of Employed Graduates
          </h1>
          <h1 className="font-bold text-gray-400 text-3xl shadow-blue-300">
            60%
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center bg-[#000345] gap-3  rounded py-3 px-3 hover:-translate-y-2 transition-all duration-150">
          <h1 className="text-white text-2xl font-bold text-center italic">
            student ratio of Females to Males
          </h1>
          <h1 className="font-bold text-gray-400 text-3xl shadow-blue-300">
            70:30
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center bg-[#000345] gap-3  rounded py-3 px-3 hover:-translate-y-2 transition-all duration-150">
          <h1 className="text-white text-2xl font-bold text-center italic">
            Total number of Student
          </h1>
          <h1 className="font-bold text-gray-400 text-3xl shadow-blue-300">
            7000+
          </h1>
        </div>

        <div className="flex flex-col justify-center items-center bg-[#000345] gap-3 rounded py-3 px-3 hover:-translate-y-2 transition-all duration-150">
          <h1 className="text-white text-2xl font-bold text-center italic">
            No. of campus
          </h1>
          <h1 className="font-bold text-gray-400 text-3xl shadow-blue-300">
            2
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Keystatistic;
