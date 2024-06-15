import React, { useEffect, useRef } from "react";
import profileIcon from "../assets/images/profile_icon.png";
import bannerImage from "../assets/images/banner_wallpaper.svg";
import Typed from "typed.js";

const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Developer",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
      }}
      className="flex justify-between items-center py-8"
    >
      <div className="w-full flex justify-center text-white">
        <div className="w-2/3 space-y-2 ms-4">
          <h3 className="text-3xl font-semibold">Hi, I'm</h3>
          <h1 className="text-4xl font-bold">Niraj Kumar</h1>
          <h2 className="text-2xl font-semibold">
            I am <span className="font-bold underline" ref={el}></span>
          </h2>
          <p>
            With over 3+ years of experience working with Info Edge as a Senior
            Software Engineer, I have developed a strong foundation in software
            development. My skills in Data Structures, Algorithms,
            Object-Oriented Programming, React, JS, and React Native have
            consistently enabled me to tackle complex problems and deliver
            effective solutions.
          </p>
          <div className="flex space-x-3">
            <a className="hover:bg-blue-500 border cursor-pointer bg-gray-800 px-4 py-4 w-12 h-12 rounded-full justify-center items-center flex">
              <i class="fa-brands fa-linkedin text-2xl"></i>
            </a>
            <a className="hover:bg-blue-500 border cursor-pointer bg-gray-800 px-4 py-4 w-12 h-12 rounded-full justify-center items-center flex">
              <i class="fa-brands fa-twitter text-2xl"></i>
            </a>
            <a className="hover:bg-blue-500 border cursor-pointer bg-gray-800 px-4 py-4 w-12 h-12 rounded-full justify-center items-center flex">
              <i class="fa-brands fa-facebook text-2xl"></i>
            </a>
            <a className="hover:bg-blue-500 border cursor-pointer bg-gray-800 px-4 py-4 w-12 h-12 rounded-full justify-center items-center flex">
              <i class="fa-brands fa-instagram text-2xl"></i>
            </a>
          </div>
          <br />
          <a
            href="/contact"
            className="animate-pulse px-12 py-4 text-1.5xl bg-orange-600 rounded-full shadow-lg hover:bg-red-500 font-semibold"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="w-full flex justify-center h-60">
        <div className="relative w-48 h-48">
          <img
            src={profileIcon}
            className="rounded-full shadow-lg w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
