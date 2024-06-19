import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [brandName] = useState("Mr. Niraj Kumar");
  const menuLinks = [
    { title: "Home", link: "home", iconClass: "fas fa-home", id: 1 },
    { title: "About", link: "about", iconClass: "fas fa-user", id: 2 },
    {
      title: "Experience",
      link: "experience",
      iconClass: "fas fa-briefcase",
      id: 3,
    },
    { title: "Projects", link: "projects", iconClass: "fas fa-tasks", id: 4 },
    { title: "Skills", link: "skills", iconClass: "fas fa-tools", id: 5 },
    {
      title: "Certificates",
      link: "certificates",
      iconClass: "fas fa-award",
      id: 6,
    },
  ];

  const [actionButton] = useState({ title: "Download Resume", link: "https://drive.google.com/file/d/1tj0mW_BtVi6Ok62PC-PB15GSg0NHubPE/view?usp=sharing" });
  const handleScrollToTop = (event) => {};

  return (
    <>
      <div
        className="h-12 main flex justify-between items-center px-4 py-12"
        style={{
          background: "linear-gradient(135deg, #1079bf, #85C1E9)",
          position: "fixed",
          left: 0,
          right: 0,
          top: 0,
          zIndex: 999,
        }}
        id="home"
      >
        <div className="bg-white text-2xl px-8 py-2 rounded-lg">{brandName}</div>
        <div className="space-x-4 flex">
          {menuLinks.map((menuLink) => (
            <span className="items-center flex" key={menuLink.id}>
              <i className={`${menuLink.iconClass} mr-2 h-18 w-18`} />
              <ScrollLink
                to={menuLink.link}
                smooth={true}
                duration={500}
                offset={-96} // Adjust this value to account for the fixed header height
                className="hover:text-orange-600 cursor-pointer"
                onClick={handleScrollToTop}
              >
                {menuLink.title}
              </ScrollLink>
            </span>
          ))}
        </div>
        <div className="animate-bounce">
          <a
            href={actionButton.link}
            className="bg-orange-600 px-4 py-2 rounded text-white text-1xl font-semibold shadow-2xl"
          >
            {actionButton.title}
          </a>
        </div>
      </div>
      <div style={{ paddingTop: "98px" }}></div>
    </>
  );
};

export default Header;
