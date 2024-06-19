import React, { useEffect, useRef } from "react";
import profileIcon from "../assets/images/profile_icon.png";
import bannerImage from "../assets/images/banner_wallpaper.svg";
import Typed from "typed.js";
import Contact from "./Contact";

const socialMediaLinks = [
  {
    id: 1,
    iconClass: "fa-brands fa-linkedin",
    url: "https://www.linkedin.com/in/niraj-kumar-18478518a/",
  },
  {
    id: 2,
    iconClass: "fa-solid fa-envelope",
    url: "mailto:kumar.niraj.nita@gmail.com",
  },
  // {
  //   id: 3,
  //   iconClass: "fa-brands fa-twitter",
  //   url: "https://www.twitter.com",
  // },
  {
    id: 4,
    iconClass: "fa-brands fa-facebook",
    url: "https://www.facebook.com/profile.php?id=100011286643409&mibextid=LQQJ4d",
  },
  {
    id: 5,
    iconClass: "fa-brands fa-instagram",
    url: "https://www.instagram.com/_nirajkumar236?igsh=MXR2eGFnZndoN2QyZw%3D%3D&utm_source=qr",
  },
];

const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Developer",
      ],
      startDelay: 100,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 100,
      loop: true,
    });

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
            {socialMediaLinks.map((socialMediaLink) => (
              <a
                className="hover:bg-blue-500 border cursor-pointer bg-gray-800 px-4 py-4 w-12 h-12 rounded-full justify-center items-center flex"
                href={socialMediaLink.url}
                key={socialMediaLink.id}
              >
                <i className={`${socialMediaLink.iconClass} text-2xl`}></i>
              </a>
            ))}
          </div>
          <br />
          <Contact />
        </div>
      </div>
      <div className="w-full flex justify-center h-full">
        <div className="rounded-full border-4 border-blue-500 zoom-effect">
          <img
            src={profileIcon}
            className="rounded-full shadow-lg w-full h-full object-cover"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
