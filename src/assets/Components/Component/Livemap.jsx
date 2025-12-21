import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Livemap = () => {
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
  const mapScr =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.2047940154825!2d3.908960574044884!3d7.873627692148587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10375bcc0f16ed89%3A0x5e14a6d806e760ec!2sEmmanuel%20Alayande%20University%20of%20Education%20Oyo!5e0!3m2!1sen!2sng!4v1766094787924!5m2!1sen!2sng";
  return (
    <div className="contains reveal mb-10">
      <h1 className="text-center font-bold text-4xl text-blue-950 py-7">
        Contact Us
      </h1>
      <iframe
        className="rounded-lg"
        src={mapScr}
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default Livemap;
