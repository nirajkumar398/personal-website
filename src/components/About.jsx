import React from "react";
import profileIcon from "../assets/images/profile_icon.png";

const About = () => {
  return (
    <div
      className="bg-gray-100 main-container py-8 border-spacing-1"
      id="about"
    >
      <h1 className="font-bold underline text-4xl text-center">About</h1>
      <div className="flex px-4 py-8">
        <div className="w-full flex justify-center rounded-full">
          <img src={profileIcon} className="w-36 h-36 rounded-full" />
        </div>
        <div className="w-full">
          <p className="animate-slide-in">
            Hello 👋, I am Niraj Kumar, a Senior Software Engineer based in Noida,
            India. I graduated from the National Institute of Technology,
            Agartala with a Bachelor of Technology in Electronics and
            Communication Engineering, achieving a CGPA of 8.84/10. My journey
            in the tech industry has been both exciting and enriching, marked by
            my passion for creating seamless user experiences and optimizing
            performance through efficient code.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
