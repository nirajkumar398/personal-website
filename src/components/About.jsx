import React from "react";
import profileIcon from "../assets/images/profile_icon.png";

const About = () => {
  return (
    <div className="main-container py-8 bg-gray-100 border-spacing-1">
      <h1 className="mb-16 font-bold underline text-4xl text-center">
        About
      </h1>
      <div className="flex px-4 py-8">
        <div className="w-full flex justify-center rounded-full">
          <img src={profileIcon} className="w-36 h-36 rounded-full" />
        </div>
        <div className="w-full">
          <p className="animate-slide-in">
            With over 3+ years of experience working with Info Edge as a Senior
            Software Engineer, I have developed a strong foundation in software
            development. My skills in Data Structures, Algorithms,
            Object-Oriented Programming, React, JS, and React Native have
            consistently enabled me to tackle complex problems and deliver
            effective solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
