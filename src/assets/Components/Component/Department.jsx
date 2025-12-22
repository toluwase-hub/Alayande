import React, { useEffect } from "react";
import { GiMaterialsScience } from "react-icons/gi";
import { FaGalacticSenate } from "react-icons/fa";
import { FaTractor } from "react-icons/fa";
import { GrInspect } from "react-icons/gr";
import { IoMdColorPalette } from "react-icons/io";
import ScrollReveal from "scrollreveal";
const Department = () => {
   useEffect(() => {
      ScrollReveal().reveal(".reveal", {
        distance: "300px",
        duration: 2000,
        easing: "ease-out",
        origin: "bottom",
        interval: 300,
        reset: false,
      });
    }, []);
  return (
    <div className="bg-[#000345] py-10">
      <h1 className="text-white lg:text-5xl text-3xl font-bold text-center">
        Apply to 40+ area of study across
      </h1>
      <h1 className="text-white text-2xl lg:text-3xl text-center py-4">
        5 Faculties & 30 Departments
      </h1>
      <div className="reveal contains grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 text-white py-10 gap-3">
        <div className="bg-white/10 group py-7 px-5 rounded-lg group hover:bg-white/15 transition-all duration-150">
          <span className="group-hover:text-blue-400">
            <IoMdColorPalette size={40} />
          </span>
          <h1>Faculty Of Arts Education</h1>
        </div>
        <div className="bg-white/10 group py-7 px-5 rounded-lg group hover:bg-white/15 transition-all duration-150">
          <span className="group-hover:text-blue-400">
            <GiMaterialsScience size={40} />
          </span>
          <h1>Faculty Of Science Education</h1>
        </div>
        <div className="bg-white/10 group py-7 px-5 rounded-lg group hover:bg-white/15 transition-all duration-150">
          <span className="group-hover:text-blue-400">
            <FaGalacticSenate size={40} />
          </span>
          <h1>Faculty Of Social Science Education</h1>
        </div>
        <div className="bg-white/10 group py-7 px-5 rounded-lg group hover:bg-white/15 transition-all duration-150">
          <span className="group-hover:text-blue-400">
            <GrInspect size={40} />
          </span>
          <h1>Faculty Of Specialised And Professional Education</h1>
        </div>
        <div className="bg-white/10 group py-7 px-5 rounded-lg group hover:bg-white/15 transition-all duration-150">
          <span className="group-hover:text-blue-400">
            <FaTractor size={40} />
          </span>
          <h1>Faculty Of Vocational, Innovation And Engineering Education</h1>
        </div>
      </div>
    </div>
  );
};

export default Department;
