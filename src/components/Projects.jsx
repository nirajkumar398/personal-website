import React from "react";

const Projects = () => {
  const projectsDatas = [
    {
      heading: "Food Application - Zomato Clone App",
      description: [
        "Architected a cross-platform food application, resembling Zomato, compatible with both Android and iOS platforms using React Native and Redux.",
        "Prioritized codebase optimization for superior performance and reusability.",
        "Engineered an intuitive user interface, enabling effortless exploration of restaurants and food items.",
        "Implemented an efficient cart management system and streamlined checkout processes for an enriched user journey.",
      ],
      id: 1,
    },
    {
      heading: "Email Client Application - Outlook Clone App",
      description: [
        "Fabricated a cross-platform email client application, compatible with both Android and iOS platforms, leveraging React Native.",
        "Engineered a user interface displaying sender metadata, email subjects, and timestamps fetched from APIs.",
        "Incorporated a split-screen layout for concurrent email browsing to enhance browsing efficiency.",
        "Integrated functionalities for marking emails as favorites, differentiating read/unread emails, and included filtering options for email categorization.",
        "Introduced pagination to manage a large volume of emails and implemented persistent storage to retain user preferences across sessions, significantly enhancing the overall user experience.",
      ],
      id: 2,
    },
  ];

  return (
    <div
      className="bg-gray-100 main-container border-spacing-1"
      id="projects"
      style={{ padding: "32px 10%", borderTop: "1px solid black" }}
    >
      <h1 className="font-bold underline text-4xl text-center">Projects</h1>
      {projectsDatas.map((project) => (
        <div key={project.id} className="mt-8">
          <h2 className="font-semibold text-2xl">{project.heading}</h2>
          <ul className="mt-2 list-disc list-inside">
            {project.description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Projects;
