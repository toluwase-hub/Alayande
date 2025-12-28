import React, { useEffect, useState } from "react";
import { FaBell } from "react-icons/fa";
import { MdCalendarMonth } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import ScrollReveal from "scrollreveal";
import { Link } from "react-router-dom";
const News = () => {
   useEffect(() => {
    ScrollReveal().reveal(".reveal", {
      distance: "300px",
      duration: 2000,
      easing: "ease-out",
      origin: "bottom",
      interval: 600,
      reset: false,
    });
  }, []);
  const [forward, setForward] = useState(3);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Resumption Message",
      details:
        "VC\\\'s Resumption Message",
      date: "January 5, 2026",
      image: (
        <img
          src="/images/Schoolgate.jpg"
          className="h-60 w-100 rounded-lg"
          alt=""
        />
      ),
    },

    {
      id: 2,
      title: "3rd Foundation Day Anniversary & Award of NCE Cerificates",
      details:
        "3rd Foundation Day Ceremony & Award of NCE Certificates",
      date: "December 12, 2025",
      image: (
        <img
          src="\images\imgi_7_1765516905_1105693.jpg"
          className="h-60 w-100 rounded-lg object-cover"
          alt=""
        />
      ),
    },
    {
      id: 3,
      title: "Annual Conference 2025 – Emmanuel Alayande University of Education, Oyo",
      details:
        "The Emmanuel Alayande University of Education, Oyo, is set to host its Annual Conference from Monday, 1st September to Thursday, 4th September 2025. The event will take place at the 500-Seater University Hall and will focus on the theme: Higher Education Mandates in Global Trends.",
      date: "September 01, 2025",
      image: (
        <img
          src="\images\imgi_6_1747730882_evt.png"
          className="h-60 w-100 rounded-lg object-cover"
          alt=""
        />
      ),
    },
  ]);

  const HandleFaward = () => {
    setForward(forward + 1);
  };

  const HandleBackward = () => {
    setForward(forward - 1);
  };

  useEffect(() => {
    const newNotivication = [
      {
        id: 4,
        title: "School fees Payment",
        details:
          "emmanuel alayande university of education oyo, the payment for 2025/2026 academy section as starts",
        date: "December 17, 2025",
        image: (
          <img
            src="/images/whats-4.jpeg"
            className="h-60 w-100 rounded-lg object-cover"
            alt=""
          />
        ),
      },
      {
        id: 4,
        title: "School fees Payment",
        details:
          "emmanuel alayande university of education oyo, the payment for 2025/2026 academy section as starts",
        date: "December 17, 2025",
        image: (
          <img
            src="/images/whats-3.jpeg"
            alt=""
            className="h-60 w-100 rounded-lg object-cover"
          />
        ),
      },
      {
        id: 4,
        title: "School fees Payment",
        details:
          "emmanuel alayande university of education oyo, the payment for 2025/2026 academy section as starts",
        date: "December 17, 2025",
        image: (
          <img
            src="/images/whats-1.jpeg"
            alt=""
            className="h-60 w-100 rounded-lg object-cover"
          />
        ),
      },
    ];
    setNotifications([...notifications, ...newNotivication]);
  }, []);

  return (
    <div className="reveal contains">
      <div className="pt-5">
        <div className="flex">
          <div className="flex justify-center items-center gap-1 relative">
            <FaBell size={40} className="animate-bounce" />
            <span className="bg-red-600 absolute text-white w-5 h-5 rounded-full flex justify-center items-center top-0 right-0 font-bold">
              {notifications.length - forward}
            </span>
          </div>
        </div>
      </div>

      <div className="text-3xl font-bold text-center mt-5 pb-3 ">
        EAUED News/Event
      </div>
      <p className="text-center mt-3 mb-3">
        Latest happenings in EAUED community
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {notifications.slice(0, forward).map((notification) => (
          <div
            key={notification.id}
            className=" shadow-2xl group rounded-lg p-2"
          >
            <div className="h-60 group-hover:scale-101 transition-all duration-150 object-cover">
              {notification.image}
            </div>
            <p className="text-black/90 text-sm font-bold flex items-center gap-3">
              <span className="text-blue-900 py-3">
                <MdCalendarMonth size={20} />
              </span>
              <span>{notification.date}</span>
            </p>
            <h1 className="font-bold text-xl line-clamp-2">{notification.title}</h1>
            <h4 className="overflow-scroll h-19 note mt-2 ">{notification.details}</h4>
             <Link to="/Event">
          <button className="bg-linear-to-r from-white/40  from-5% via-[#000345] via-30% to-[#000345] to-95% py-3 rounded-sm px-3 font-bold text-white mt-6">
            Read More
          </button>
          </Link>
          </div>
        ))}
      </div>
      <div className="flex gap-3 mt-3 py-4">
        <button
          onClick={HandleBackward}
          className={` ${
            forward <= 3 ? "hidden" : "flex"
          } text-2xl font-light border px-2 hover:scale-110 transition-all duration-150 rounded`}
        >
          <FaLongArrowAltLeft />
        </button>

        <button
          onClick={HandleFaward}
          className={`${
            forward < notifications.length ? "flex" : "hidden"
          } text-2xl border px-2 hover:scale-110 transition-all duration-150 rounded`}
        >
          <FaLongArrowAltRight />
        </button>
      </div>
    </div>
  );
};

export default News;
