import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { PiGreaterThanLight } from "react-icons/pi";
import { CiFacebook } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import ScrollReveal from "scrollreveal";

const Footer = () => {
//    useEffect(() => {
//       ScrollReveal().reveal(".reveal", {
//         distance: "100px",
//         duration: 800,
//         easing: "ease-out",
//         origin: "bottom",
//         interval: 300,
//         reset: false,
//       });
//     }, []);
  return (
    <div className="bg-[#000345] py-10 ">
      <div className="contains ">
        <div className=" border-b border-white/30">
          <footer className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10  pt-10">
            <div className="col-span-2">
              <div className="flex gap-3  items-center">
                <img
                  src="/images/school-logo_icon.png"
                  className="w-17  h-20 object-cover"
                  alt=""
                />
                <h1 className="text-white text-lg font-bold">
                  Emmanuel Alayande University Of Education, Oyo Nigeria
                </h1>
              </div>

              <p className="text-white font-light text-justify py-2 ">
                The University supports modern internationally inspired
                curricular, with emphasis on skills acquisition,
                industry-readiness, and focus on Producing Quality teachers.
              </p>
            </div>
            <div>
              <h1 className="text-white font-bold text-lg">Quick Link</h1>
              <ul className="text-white font-light flex flex-col gap-2">
                <li className="hover:underline ">
                  <Link to="/Aboutus" className="flex items-center gap-1">
                    <span>
                      <PiGreaterThanLight />
                    </span>
                    <span>About Us</span>
                  </Link>
                </li>
                <li className="hover:underline ">
                  <Link to="/Event" className="flex items-center gap-1">
                    {" "}
                    <span>
                      <PiGreaterThanLight />
                    </span>{" "}
                    <span>EAUED News</span>{" "}
                  </Link>
                </li>
                <li className="hover:underline ">
                  <Link to="/Admission" className="flex items-center gap-1">
                    {" "}
                    <span>
                      <PiGreaterThanLight />
                    </span>{" "}
                    <span>Admission</span>
                  </Link>
                </li>
                <li className="hover:underline ">
                  <Link to="/Studentportal" className="flex items-center gap-1">
                    {" "}
                    <span>
                      <PiGreaterThanLight />
                    </span>{" "}
                    <span>Student portal</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-white font-bold text-lg">Useful Links</h1>
              <ul className="text-white font-light flex flex-col gap-2">
                <li className="hover:underline ">
                  <Link to="/" className="flex items-center gap-1">
                    {" "}
                    <span>
                      <PiGreaterThanLight />
                    </span>
                    <span>Nelfund</span>
                  </Link>
                </li>
                <li className="hover:underline ">
                  <Link to="/" className="flex items-center gap-1">
                    {" "}
                    <span>
                      <PiGreaterThanLight />
                    </span>
                    <span>Tetfund</span>
                  </Link>
                </li>
                <li className="hover:underline ">
                  <Link to="/" className="flex items-center gap-1">
                    {" "}
                    <span>
                      <PiGreaterThanLight />
                    </span>
                    <span>LMS</span>
                  </Link>
                </li>
                <li className="hover:underline ">
                  <Link to="/" className="flex items-center gap-1">
                    {" "}
                    <span>
                      <PiGreaterThanLight />
                    </span>
                    <span>Perent forum</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h1 className="text-white font-bold text-lg">Stakeholders</h1>
              <ul className="text-white font-light flex flex-col gap-2">
                <li className="hover:underline ">
                  <Link to="/" className="flex items-center gap-1">
                    {" "}
                    <span>
                      <PiGreaterThanLight />
                    </span>
                    <span>TETfund</span>
                  </Link>
                </li>
                <li className="hover:underline ">
                  <Link to="/" className="flex items-center gap-1">
                    {" "}
                    <span>
                      <PiGreaterThanLight />
                    </span>
                    <span>Research</span>
                  </Link>
                </li>
                <li className="hover:underline ">
                  <Link to="/" className="flex items-center gap-1">
                    {" "}
                    <span>
                      <PiGreaterThanLight />
                    </span>
                    <span>University journal</span>
                  </Link>
                </li>
                <li className="hover:underline ">
                  <Link to="/" className="flex items-center gap-1">
                    {" "}
                    <span>
                      <PiGreaterThanLight />
                    </span>
                    <span>Campus life</span>
                  </Link>
                </li>
              </ul>
            </div>
          </footer>

          <div className="flex gap-2 text-white py-3">
            <CiFacebook
              className="hover:scale-120  transition-all duration-150"
              size={20}
            />
            <FaTwitter
              className="hover:scale-120 transition-all duration-150"
              size={20}
            />
            <FaLinkedin
              className="hover:scale-120 transition-all duration-150"
              size={20}
            />
            <FaYoutube
              className="hover:scale-120 transition-all duration-150"
              size={20}
            />
          </div>
        </div>
        <div className="flex justify-between flex-wrap pt-5">
          <div>
            <p className="text-white font-light">
              © 2025. All rights reserved. Emmanuel Alayande University Of
              Education University of Nigeria
            </p>
          </div>

          <div className="flex text-white gap-3 font-light text-sm">
            <h1 className="hover:underline ">Privacy</h1>
            <h1 className="hover:underline ">Legal</h1>
            <h1 className="hover:underline ">sitemap</h1>
            <h1 className="hover:underline ">Staff Email</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
