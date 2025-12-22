import React, { useEffect } from "react";
import Herosection from "../Components/Component/Herosection";
import ScrollReveal from "scrollreveal";
import Course from "../Components/Component/Course";
import Welcomegreetings from "../Components/Component/Welcomegreetings";
import Mission from "../Components/Component/Mission";
import Keystatistic from "../Components/Component/Keystatistic";
import News from "../Components/Component/News";
import Department from "../Components/Component/Department";
import Explore from "../Components/Component/Explore";
import WhyEaued from "../Components/Component/WhyEaued";
import Gallary from "../Components/Component/Gallary";
import Livemap from "../Components/Component/Livemap";
import Footer from "../Components/Component/Footer";


const Homepage = () => {
  useEffect(() => {
    ScrollReveal().reveal(".reveal", {
      distance: "50px",
      duration: 800,
      easing: "ease-out",
      origin: "bottom",
      interval: 100,
      reset: false,
    });
  }, []);
  return (
    <div>
      <Herosection />
      <Course />
      <Welcomegreetings />
      <Mission />
      <Keystatistic />
      <News />
      <Department />
      <Explore />
      <WhyEaued />
      <Gallary />
      <Livemap />
    </div>
  );
};

export default Homepage;
