import React, { useEffect } from "react";
import { SiHtmlacademy } from "react-icons/si";
import { HiAcademicCap } from "react-icons/hi";
import ScrollReveal from "scrollreveal";

const Mission = () => {
   useEffect(() => {
      ScrollReveal().reveal(".reveal", {
        distance: "500px",
        duration: 1200,
        easing: "ease-out",
        origin: "left",
        interval: 600,
        reset: false,
      });
    }, []);
  return (
    <div className="bg-[#000345]  ">
      <div className="reveal contains grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-center py-15">
        <div className="bg-white/10 group py-7 px-5 rounded-lg hover:bg-white/15 transition-all duration-150">
          <span>
            <HiAcademicCap
              size={50}
              className="text-white group-hover:text-blue-700"
            />
          </span>
          <span className="text-white font-bold text-3xl">Our Mission</span>
          <h1 className="text-white text-justify">
            To be an incubator for the training and production of highly
            qualified, top-notched and globally relevant professionals who will
            serve as teachers, administrators, supervisors, counsellors and
            other essential manpower in the field of education, community
            service, industry and development at the national and international
            levels.
          </h1>
        </div>
        <div className="bg-white/10 py-7 px-5 group rounded-lg hover:bg-white/15 transition-all duration-150">
          <span>
            <SiHtmlacademy
              size={50}
              className="text-white group-hover:text-blue-700"
            />
          </span>
          <span className="text-white font-bold text-3xl">Our Vision</span>
          <h1 className="text-white text-justify">
            To be the best specialized University of Education in Africa with a
            niche in the: integration teaching and learning; advancement of
            knowledge through research and scholarship; leadership in service
            and development; and in producing teachers and manpower suited to
            the challenges of the contemporary global knowledge economy.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Mission;
