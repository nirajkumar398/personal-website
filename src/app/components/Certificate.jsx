import React from "react";

const Certificate = () => {
  const certificateData = [
    {
      title: "React - The Complete Guide 2024 (incl. Next.js, Redux)",
      id: 1,
      link: "https://drive.google.com/file/d/1g09dQujhlWVhBJrFnjvnGY-daUina2Yr/view?usp=sharing",
    },
    {
      title: "Data Structures and Algorithms",
      id: 2,
      link: "https://drive.google.com/file/d/1g09dQujhlWVhBJrFnjvnGY-daUina2Yr/view?usp=sharing",
    },
    {
      title: "C and C++ Programming",
      id: 3,
      link: "https://drive.google.com/file/d/1g09dQujhlWVhBJrFnjvnGY-daUina2Yr/view?usp=sharing",
    },
  ];
  return (
    <div
      className="bg-gray-100 main-container border-spacing-1"
      id="certificates"
      style={{
        padding: "32px 10%",
        borderTop: "1px solid black",
        background: "linear-gradient(to right, rgb(237 240 245 / 98%), rgba(132, 164, 203, 0.72))",
      }}
    >
      <h1 className="font-bold underline text-4xl text-center mb-10">
        Certificates
      </h1>
      {certificateData.map((certicate) => (
        <div className="flex items-center gap-3 mb-4">
          <li className="font-semibold text-2xl" key={certificateData.id}>
            {certicate.title}
          </li>
          <a
            className="hover:text-blue-500 cursor-pointer bg-sky-500 px-4 py-1 rounded-2xl"
            href={certicate.link}
          >
            Link
          </a>
        </div>
      ))}
    </div>
  );
};

export default Certificate;
