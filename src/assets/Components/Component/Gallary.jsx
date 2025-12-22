import React from "react";
import Marquee from "react-fast-marquee";

const Gallary = () => {
  
  return (
    <div className="py-3">
      <h1 className="text-center text-4xl font-bold text-blue-950 py-10">
        Our Gallery
      </h1>
      <Marquee pauseOnHover={true}>
        <div className="flex justify-center items-center gap-2 pt-10">
          <img
            src="/public/imgi_2_vice chancellor.jpg"
            className="w-100 h-60 object-cover rounded-lg "
            alt=""
          />
          <img
            src="/public/imgi_6_1747730882_evt.png"
            className="w-100 h-60 object-cover rounded-lg "
            alt=""
          />
          <img
            src="/public/imgi_16_success.jpg"
            className="w-100 h-60 object-cover rounded-lg  "
            alt=""
          />
          <img
            src="/public/imgi_17_campus.jpg"
            className="w-100 h-60 object-cover rounded-lg "
            alt=""
          />
          <img
            src="/public/whats-1.jpeg"
            className="w-100 h-60 object-cover rounded-lg "
            alt=""
          />
          <img
            src="/public/whats-2.jpeg"
            className="w-100 h-60 object-cover rounded-lg "
            alt=""
          />
          <img
            src="/public/whats-3.jpeg"
            className="w-100 h-60 object-cover rounded-lg  "
            alt=""
          />
          <img
            src="/public/whats-4.jpeg"
            className="w-100 h-60 object-cover rounded-lg me-2 "
            alt=""
          />
        </div>
      </Marquee>

      <Marquee pauseOnHover="true" direction="right">
        <div className="flex justify-center items-center gap-2 py-2">
          <img
            src="/public/Alao-akala.jpg"
            className="w-100 h-60 object-cover rounded-lg "
            alt=""
          />
          <img
            src="/public/Schoolgate.jpg"
            className="w-100 h-60 object-cover rounded-lg "
            alt=""
          />
          <img
            src="/public/imgi_2_vice chancellor.jpg"
            className="w-100 h-60 object-cover rounded-lg "
            alt=""
          />
          <img
            src="/public/imgi_16_success.jpg"
            className="w-100 h-60 object-cover rounded-lg me-2  "
            alt=""
          />
          <img
            src="/public/whats-5.jpeg"
            className="w-100 h-60 object-cover rounded-lg "
            alt=""
          />
          <img
            src="/public/whats-6.jpeg"
            className="w-100 h-60 object-cover rounded-lg "
            alt=""
          />
          <img
            src="/public/whats-7.jpeg"
            className="w-100 h-60 object-cover rounded-lg "
            alt=""
          />
          <img
            src="/public/whats-9.jpeg"
            className="w-100 h-60 object-cover rounded-lg me-2  "
            alt=""
          />
        </div>
      </Marquee>
    </div>
  );
};

export default Gallary;
