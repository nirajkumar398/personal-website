import React from "react";

const EXPERIENCE_DATA = {
  company: "Info Edge India Ltd (Noida, India)",
  position: "Senior Software Engineer",
  duration: "Jun 2021 – Present",
  responsibilities: [
    {
      title: "Enhanced Authentication and Security",
      points: [
        "Architected and implemented seamless login and registration processes using React.js for Desktop and React Native for mobile platforms.",
        "Leveraged Redux for state management, significantly enhancing application security and overall user experience.",
        "Integrated Truecaller authentication to streamline user login and registration, resulting in a more intuitive and frictionless user experience."
      ]
    },
    {
      title: "Innovative Feature Development",
      points: [
        "Developed the 'Search Near Me' feature to enable users to locate and display nearby properties efficiently.",
        "Optimized code quality and performance, resulting in a faster and more responsive user interface.",
        "Implemented functionalities to display distances to properties and nearby landmarks, such as banks, ATMs, hospitals, metro stations, and malls, thereby improving the overall user experience and utility of the application."
      ]
    },
    {
      title: "Cross-Functional Collaboration and Mentorship",
      points: [
        "Collaborated with cross-functional teams, including product managers, designers, and backend engineers, to design and implement new features that align with business goals and user needs.",
        "Provided mentorship and guidance to junior developers, fostering a culture of best practices in software development, code reviews, and performance optimization."
      ]
    },
    {
      title: "Agile Project Management",
      points: [
        "Utilized Agile methodologies to manage project timelines, ensuring timely delivery of high-quality software solutions.",
        "Conducted thorough testing and debugging to ensure robust and reliable software performance, reducing the number of post-release issues."
      ]
    },
    {
      title: "Continuous Improvement and Innovation",
      points: [
        "Continuously researched and integrated new technologies to improve application performance and user satisfaction.",
        "Implemented performance monitoring and optimization strategies to ensure the application runs smoothly and efficiently under high load conditions."
      ]
    }
  ]
};

const Experience = () => {
  const { company, position, duration, responsibilities } = EXPERIENCE_DATA;

  return (
    <div
      className="bg-gray-100 main-container border-spacing-1"
      id="experience"
      style={{ padding: "32px 10%", background: '#f7efef', borderTop: '1px solid black' }}
    >
      <h1 className="font-bold underline text-4xl text-center">Work Experience</h1>
      <div className="mt-8">
        <h2 className="font-semibold text-2xl">{company}</h2>
        <h3 className="text-1xl mt-1">{position} ({duration})</h3>
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
