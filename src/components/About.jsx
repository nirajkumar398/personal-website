import React from "react";
import aboutUs from "../assets/images/aboutUs.png";

const About = () => {
  return (
    <div
      className="main-container py-8"
      id="about"
      style={{ background: "#f5ebde", borderTop: "1px solid black", padding: "32px 10%"}}
    >
      <h1 className="font-bold underline text-4xl text-center">About</h1>
      <div className="flex py-8 justify-center items-center">
        <div className="h-full w-full relative flex justify-center items-center">
          <div className="relative flex justify-center items-center">
            <img src={aboutUs} className="w-full h-full object-cover rounded-full" />
            <div className="absolute inset-0 border-4 border-cyan-400 rounded-full animate-spin-slow flex justify-center items-center">
              <div className="white-dot"></div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <p className="animate-slide-in">
            Hello 👋, I am Niraj Kumar, a Senior Software Engineer based in
            Noida, India. I graduated from the National Institute of Technology,
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
