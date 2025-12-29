import React from "react";
'use client';
import Slider from "react-slick";

const Herosection = () => {

  const images = [
   {
    image: <img src="\images\Alao-akala.jpg" alt="image1" className="w-full h-115 lg:h-130 object-cover" />

   },
   { 
    image: <img src="\images\imgi_2_vice chancellor.jpg" alt="image2" className="w-full  h-115 lg:h-130 object-cover" />
  },
    {
      image: <img src="\images\imgi_16_success.jpg" alt="image3" className="w-full  h-115 lg:h-130 object-cover" />

    },
   { 
    image: <img src="\images\whats-4.jpeg" alt="image4" className="w-full  h-115 lg:h-130 object-cover" />

   },
    { 
    image: <img src="\images\imgi_17_campus.jpg" alt="image5" className="w-full  h-115 lg:h-130 object-cover" />

   },
    { 
    image: <img src="\images\Schoolgate.jpg" alt="image6"  className="w-full  h-115 lg:h-130 object-cover"/>

   },
    { 
    image: <img src="\images\whats-6.jpeg" alt="image7"  className="w-full  h-115 lg:h-130 object-cover"/>

   },
    { 
    image: <img src="\images\whats-1.jpeg" alt="image8"  className="w-full  h-115 lg:h-130 object-cover"/>

   },
    { 
    image: <img src="\public\images\whats-2.jpeg" alt="image9"  className="w-full  h-115 lg:h-130 object-cover"/>

   }

  ]

  const settings = {
    dots: false,
    Infinite:true,
    speed: 1500,
    fade:true,
    cssEase: 'linear',
    autoplay:true,
    autoplayspeed:10000,
    arrows:false,
    pauseOnHover:false,
    lazyLoad:'ondemand'
  }
  return (
    <div className="relative  ">
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="h-[60vh]  w-full  object-fill lg:h-[87vh]"
      >
        <source src="\images\ReduceNavvedio.mp4" type="video/mp4" />
      </video> */}
      <Slider {...settings}>
        {
          images.map((pics)=>(
            <div className="w-full lg:h-125 h-110  ">
              
                {pics.image}
              
            </div>
          ))
        }
      </Slider>

      <div className="absolute inset-0 bg-black/30"></div>
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
