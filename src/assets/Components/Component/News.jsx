import React, { useEffect, useState } from "react";
import { FaBell } from "react-icons/fa";
import { MdCalendarMonth } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import ScrollReveal from "scrollreveal";
const News = () => {
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
  const [forward, setForward] = useState(3);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "School fees Payment",
      details:
        "emmanuel alayande university of education oyo, the payment for 2025/2026 academy section as starts",
      date: "December 17, 2025",
      image: (
        <img
          src="../src/assets/Components/Schoolgate.jpg"
          className="h-60 w-100 rounded-lg"
          alt=""
        />
      ),
    },

    {
      id: 2,
      title: "School fees Payment",
      details:
        "emmanuel alayande university of education oyo, the payment for 2025/2026 academy section as starts",
      date: "December 17, 2025",
      image: (
        <img
          src="../src/assets/Components/Alao-akala.jpg"
          className="h-60 w-100 rounded-lg"
          alt=""
        />
      ),
    },
    {
      id: 3,
      title: "School fees Payment",
      details:
        "emmanuel alayande university of education oyo, the payment for 2025/2026 academy section as starts",
      date: "December 17, 2025",
      image: (
        <img
          src="../src/assets/Components/whats-2.jpeg"
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
            src="../src/assets/Components/whats-4.jpeg"
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
            src="../src/assets/Components/whats-3.jpeg"
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
            src="../src/assets/Components/whats-1.jpeg"
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
            <div className="h-60 group-hover:scale-101 transition-all duration-150">
              {notification.image}
            </div>
            <p className="text-black/90 text-sm font-bold flex items-center gap-3">
              <span className="text-blue-900 py-3">
                <MdCalendarMonth size={20} />
              </span>
              <span>{notification.date}</span>
            </p>
            <h1 className="font-bold text-xl">{notification.title}</h1>
            <h4 className=" ">{notification.details}</h4>
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
