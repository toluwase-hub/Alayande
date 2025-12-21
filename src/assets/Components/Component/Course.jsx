import React, { useEffect } from "react";
import { FcGraduationCap } from "react-icons/fc";
import { FaUserGraduate } from "react-icons/fa6";
import { PiGraduationCapBold } from "react-icons/pi";
import ScrollReveal from "scrollreveal";

const Course = () => {
   useEffect(() => {
      ScrollReveal().reveal(".reveal", {
        distance: "50px",
        duration: 2000,
        easing: "ease-out",
        origin: "bottom",
        interval: 600,
        reset: false,
      });
    }, []);
  return (
    <div className="relative w-[85%] h-120 md:h-80 lg:h-[10%]  mx-auto place-items-center items-center justify-center ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-7 absolute z-40 -top-17.5 ">
        <div className="reveal bg-[#000345] text-white py-4 px-4 rounded hover:scale-105 transition-all duration-150">
          <h3 className="flex items-center gap-4">
            {" "}
            <span>
              <FcGraduationCap size={35} />
            </span>{" "}
            <span className="font-bold text-lg">Undergraduate Programmes</span>
          </h3>
          <h6 className="font-light">
            Explore world-class learning opportunities
          </h6>
          <button className="border py-1 px-2 rounded hover:bg-white/20 transition-all duration-150 mt-2">
            More
          </button>
        </div>
        <div className="reveal bg-[#000345] text-white py-4 px-4 rounded hover:scale-105 transition-all duration-150">
          <h3 className="flex items-center gap-4">
            {" "}
            <span>
              <FaUserGraduate size={35} />
            </span>{" "}
            <span className="font-bold text-lg">Postgraduate Programmes</span>
          </h3>
          <h6 className="font-light">Advance your career with excellence</h6>
          <button className="border py-1 px-2 rounded hover:bg-white/20 transition-all duration-150 mt-2">
            More
          </button>
        </div>
        <div className="reveal bg-[#000345] text-white py-4 px-5 rounded hover:scale-105 transition-all duration-150">
          <h3 className="flex items-center gap-4">
            {" "}
            <span>
              <PiGraduationCapBold size={35} />
            </span>{" "}
            <span className="font-bold text-lg">JUPEB</span>
          </h3>
          <h6 className="font-light">
            Opportunities to get admitted without Jamb.
          </h6>
          <button className="border py-1 px-2 rounded hover:bg-white/20 transition-all duration-150 mt-2">
            {" "}
            More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;
