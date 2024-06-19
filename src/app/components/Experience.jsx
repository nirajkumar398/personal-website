import React from "react";

const EXPERIENCE_DATA = {
  company: "Info Edge India Ltd (Noida, India)",
  position: "Senior Software Engineer",
  duration: "Jun 2021 – Present",
  responsibilities: [
    {
      title: "Seamless Login and Registration",
      points: [
        "Implemented login and registration processes using React.js for Desktop and React Native for mobile platforms.",
        "Utilized Redux to manage state, enhancing app security and overall user experience.",
        "Achieved a 20% reduction in app loading times.",
      ],
    },
    {
      title: "Truecaller Integration",
      points: [
        "Integrated Truecaller authentication for a seamless and secure login and registration experience.",
        "Led to a 10% increase in user registrations and a 15% reduction in login-related issues.",
      ],
    },
    {
      title: "Search Near Me Feature",
      points: [
        "Developed a feature to locate and display nearby properties, optimizing code quality for improved performance.",
        "Implemented functionalities to show distances to properties and nearby landmarks such as banks, ATMs, hospitals, metro stations, and malls.",
        "Resulted in a 25% increase in user engagement with the map feature.",
      ],
    },
    {
      title: "Rest API Security Enhancement",
      points: [
        "Designed and implemented a secure endpoint to eliminate the exposure of sensitive information such as visitorId in API query parameters and on the client side.",
        "Ensured these details are transmitted securely through header cookies.",
        "Developed robust encoding mechanisms for third-party API interactions and implemented efficient decoding processes on the backend side.",
      ],
    },
    {
      title: "User Experience Enhancements",
      points: [
        "Continuously improved app performance and user interface based on user feedback, increasing overall user satisfaction by 18%.",
        "Ensured a consistent and responsive design across all platforms, contributing to a 12% boost in user retention rates.",
      ],
    },
    {
      title: "Code Optimization",
      points: [
        "Refactored existing code to improve maintainability and scalability, reducing technical debt by 30%.",
        "Conducted thorough code reviews to ensure high-quality deliverables, leading to a 40% decrease in post-deployment bugs.",
      ],
    },
  ],
};

const Experience = () => {
  const { company, position, duration, responsibilities } = EXPERIENCE_DATA;

  return (
    <div
      className="bg-gray-100 main-container border-spacing-1"
      id="experience"
      style={{
        padding: "32px 10%",
        background: "#f7efef",
        borderTop: "1px solid black",
      }}
    >
      <h1 className="font-bold underline text-4xl text-center">
        Work Experience
      </h1>
      <div className="mt-8">
        <h2 className="font-semibold text-2xl">{company}</h2>
        <h3 className="text-1xl mt-1">
          {position} ({duration})
        </h3>
        {responsibilities.map((section, index) => (
          <div key={index} className="mt-4 ml-8">
            <h4 className="font-semibold text-xl">{section.title}</h4>
            <ul className="mt-2 list-disc list-inside">
              {section.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
