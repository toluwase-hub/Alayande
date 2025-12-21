import React, { useEffect } from "react";
import { FcGraduationCap } from "react-icons/fc";
import ScrollReveal from "scrollreveal";

const Explore = () => {
   useEffect(() => {
      ScrollReveal().reveal(".reveal", {
        distance: "300px",
        duration: 2000,
        easing: "ease-out",
        origin: "bottom",
        interval: 600,
        reset: true,
      });
    }, []);
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div className="flex flex-col justify-center  relative h-150 lg:h-112.5">
          <div>
            <img
              src="../src/assets/Components/Alao-akala.jpg"
              className="object-cover h-150 lg:h-112.5"
              alt=""
            />
          </div>

          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute inset-0 text-white flex flex-col justify-center gap-5  px-5 lg:px-16 md:px-16">
            <h1 className="flex items-center gap-3">
              <span>
                <FcGraduationCap size={35} />
              </span>{" "}
              <span className="text-2xl  ">Core Values</span>
            </h1>
            <h1 className="reveal text-5xl">Explore Our Campus</h1>
            <p className="reveal text-justify">
              Step into an environment designed to inspire growth, creativity,
              and lifelong learning. Our campus features world-class facilities,
              modern classrooms, and peaceful study spaces.
            </p>

            <p className="reveal text-justify">
              Whether you're visiting for the first time or returning as an
              alumnus, our guided tours give you an inside look at student life,
              academic buildings, and state-of-the-art labs and libraries.
            </p>
          </div>
        </div>
        <div className="hidden lg:block">
          <img src="../src/assets/Components/Alao-akala.jpg" alt="" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div className="hidden lg:block">
          <img src="../src/assets/Components/imgi_16_success.jpg" alt="" />
        </div>

        <div className="flex flex-col justify-center relative h-150 lg:h-112.5">
          <div>
            <img
              src="../src/assets/Components/imgi_16_success.jpg"
              className="object-cover h-150 lg:h-112.5"
              alt=""
            />
          </div>

          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute inset-0 text-white flex flex-col justify-center gap-5 px-5 lg:px-16 md:px-16">
            <h1 className="flex items-center gap-3">
              <span>
                <FcGraduationCap size={35} />
              </span>{" "}
              <span className="text-2xl">Core Values</span>
            </h1>
            <h1 className="text-5xl reveal">Celebrating Success</h1>
            <p className="text-justify reveal">
              Success comes in many forms – completing a major project, winning
              a competition, or simply reaching a personal goal. We believe
              every achievement deserves to be recognized and celebrated.
            </p>

            <p className="text-justify reveal">
              Our community comes together to honor milestones both big and
              small, sharing in the joy and inspiration that comes from
              dedication, teamwork, and perseverance.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div className="flex flex-col justify-center  relative h-150 lg:h-112.5">
          <div>
            <img
              src="../src/assets/Components/imgi_17_campus.jpg"
              className="object-cover h-150 lg:h-112.5"
              alt=""
            />
          </div>

          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute inset-0 text-white flex flex-col justify-center gap-5 px-5 lg:px-16 md:px-16">
            <h1 className="flex items-center gap-3">
              <span>
                <FcGraduationCap size={35} />
              </span>{" "}
              <span className="text-2xl">Core Values</span>
            </h1>
            <h1 className="text-5xl reveal">Discover Campus Life</h1>
            <p className="text-justify reveal">
              Our campus is more than a place to study — it's a vibrant
              community where students connect, grow, and thrive together. Enjoy
              a mix of academic and recreational spaces built with your future
              in mind.
            </p>

            <p className="text-justify reveal">
              From student-led clubs to cultural events and sports activities,
              campus life is full of opportunities to explore your passions and
              make lasting memories.
            </p>
          </div>
        </div>
        <div className="hidden lg:block">
          <img src="../src/assets/Components/imgi_17_campus.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Explore;
