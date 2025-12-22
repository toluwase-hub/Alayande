import React, { useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import ScrollReveal from "scrollreveal";

const WhyEaued = () => {
   useEffect(() => {
      ScrollReveal().reveal(".reveal", {
        distance: "100px",
        duration: 2000,
        easing: "ease-out",
        origin: "bottom",
        interval: 100,
        reset: false,
      });
    }, []);
  const Whyus = [
    {
      id: 1,
      title: "World-Class Education",
      details:
        "EAUED offers globally competitive academic programs designed in partnership with leading international institutions.",
      image: (
        <img
          src="/public/Schoolgate.jpg"
          className="h-60 w-100 rounded-lg"
          alt=""
        />
      ),
    },

    {
      id: 2,
      title: " State of the-Art Facilities",
      details:
        "The university boasts modern learning facilities, including well-equipped laboratories and smart classrooms.",

      image: (
        <img
          src="/public/Alao-akala.jpg"
          className="h-60 w-100 rounded-lg"
          alt=""
        />
      ),
    },
    {
      id: 3,
      title: "Secure and Serene Campus",
      details:
        "Located in a safe and peaceful environment in Oyo, Oyo State, EAUED provides a conducive atmosphere.",

      image: (
        <img
          src="/public/imgi_17_campus.jpg"
          className="h-60 w-100 rounded-lg"
          alt=""
        />
      ),
    },
  ];
  return (
    <div className="contains">
      <h1 className="text-center font-bold text-2xl py-4 lg:text-4xl">
        Why Choose EAUED?
      </h1>
      <p className="text-center text-lg pb-10 reveal">Reasons why we stand out</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 reveal">
        {Whyus.map((whyus) => (
          <div
            key={whyus.id}
            className="shadow-2xl text-center hover:shadow-lg"
          >
            <div>{whyus.image}</div>
            <h1 className="py-5 font-bold text-2xl text-blue-950">
              {whyus.title}
            </h1>
            <p className="px-1 h-20">{whyus.details}</p>
            <button className="text-blue-950 font-bold py-3 flex justify-center mx-auto items-center gap-1 hover:underline">
              <span>Explore</span>{" "}
              <span className="pt-1">
                <FaLongArrowAltRight />
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyEaued;
