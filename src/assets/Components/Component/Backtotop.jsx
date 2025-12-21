import React, { useEffect, useState } from "react";
import { useTransition } from "react";
import { ToastContainer, toast } from "react-toastify";
import { CiFacebook } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

const Backtotop = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const Show = () => {
      if (window.scrollY > 200) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", Show);

    return () => {
      window.removeEventListener("scroll", Show);
    };
  }, []);

  const Top = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const showtost = () => toast("hello world");

  return (
    <div>
      {scroll && (
        <div className=" transition-all duration-300">
          <button
            onClick={Top}
            className="fixed bottom-5 text-3xl right-2 text-white bg-black/50 py-2 px-1 "
          >
            <FaArrowUp size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Backtotop;
