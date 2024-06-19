import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <div
        className="main-container py-14"
        style={{
          padding: "32px 10%",
          borderTop: "1px solid black",
          background: "#eef9ee",
        }}
      >
        <h1 className="text-4xl font-bold text-center underline">My Services</h1>
        <div className="services-container space-x-5 px-10 flex mt-12">
          <div className="cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl service1 space-y-4">
            <i className="text-5xl fa-brands fa-aws"></i>
            <h1 className="text-4xl">Web Development</h1>
            <p>
              Crafting responsive and dynamic websites using the latest web technologies. Specializing in creating seamless user experiences with React.js, HTML, and CSS.
            </p>
            <Link to="/personal-website/web-development">
              <button className="px-3 py-2 bg-orange-500 text-1xl rounded-full shadow-lg mt-4 text-white font-semibold">
                Learn More
              </button>
            </Link>
          </div>
          <div className="cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl">
            <i className="text-5xl fa-solid fa-mobile"></i>
            <h1 className="text-4xl">App Development</h1>
            <p>
              Developing high-performance mobile applications with a focus on user experience and functionality. Expertise in React Native to deliver cross-platform solutions.
            </p>
            <Link to="/personal-website/app-development">
              <button className="px-3 py-2 bg-orange-500 text-1xl rounded-full shadow-lg mt-4 text-white font-semibold">
                Learn More
              </button>
            </Link>
          </div>
          <div className="cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl">
            <i className="text-5xl fa-solid fa-server"></i>
            <h1 className="text-4xl">Backend Development</h1>
            <p>
              Building robust and scalable backend systems using Spring Boot and AWS. Ensuring secure, efficient, and maintainable server-side applications.
            </p>
            <Link to="/personal-website/backend-development">
              <button className="px-3 py-2 bg-orange-500 text-1xl rounded-full shadow-lg mt-4 text-white font-semibold">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
