import React, { useState } from "react";
import aboutUs from "../assets/images/aboutUs.png";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div
      className="main-container py-8"
      id="about"
      style={{
        background: "#f5ebde",
        borderTop: "1px solid black",
        padding: "32px 10%",
      }}
    >
      <h1 className="font-bold underline text-4xl text-center">About</h1>
      <div className="flex py-8 justify-center items-center">
        <div className="h-full w-full relative flex justify-center items-center">
          <div className="relative flex justify-center items-center">
            <img
              src={aboutUs}
              className="w-full h-full object-cover rounded-full"
              alt="About Us"
            />
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
          <p
            className={`animate-slide-in ${showMore ? "" : "hidden"}`}
            style={{
              marginTop: "1.5rem",
              borderTop: "1px solid #ccc",
              paddingTop: "1.5rem",
            }}
          >
            My expertise spans across frontend and backend technologies,
            encompassing areas such as React.js, React Native, Spring Boot, and
            AWS. I thrive in dynamic environments where creativity meets
            precision, leveraging Agile methodologies to deliver robust,
            scalable solutions. I'm dedicated to staying ahead of industry
            trends and continuously refining my skills to tackle tomorrow's
            challenges head-on.
          </p>
          <p
            className={`animate-slide-in ${showMore ? "" : "hidden"}`}
            style={{
              marginTop: "1.5rem",
              borderTop: "1px solid #ccc",
              paddingTop: "1.5rem",
            }}
          >
            Beyond coding, I enjoy exploring new technologies, mentoring fellow
            developers, and contributing to open-source communities. I believe
            in the power of collaboration and the transformative impact of
            technology on society. Let's connect and explore how we can innovate
            together!
          </p>

          <button
            onClick={toggleShowMore}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300"
            style={{
              background: "linear-gradient(135deg, #007BFF, #00BFFF)",
              border: "none",
              cursor: "pointer",
            }}
          >
            {showMore ? "Read Less..." : "Read More..."}
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
