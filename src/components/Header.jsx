import React, { useState } from "react";

const Header = () => {
  const [brandName, setBrancName] = useState("Mr. Niraj Kumar");
  const [menuLinks, setMenuLinks] = useState([
    {
      title: "Home",
      link: "/home",
      id: 1,
    },
    {
      title: "About",
      link: "/about",
      id: 2,
    },
    {
      title: "Skills",
      link: "/skilss",
      id: 3,
    },
    {
      title: "Portfolio",
      link: "/portfolio",
      id: 4,
    },
    {
      title: "contact",
      link: "/contact",
      id: 5,
    },
  ]);

  const [actionButton, setActionButton] = useState({
    title: "Hire Me",
    link: "/hire-me",
  });
  return (
    <div
      className="h-12 main flex justify-between items-center px-4 py-12"
      style={{ background: "linear-gradient(135deg, #1079bf, #85C1E9)" }}
    >
      <div> {brandName}</div>
      <div className="space-x-4">
        {menuLinks.map((menuLink) => (
          <a
            key={menuLink.id}
            href={menuLink.link}
            className="hover:text-orange-600"
          >
            {menuLink.title}
          </a>
        ))}
      </div>
      <div>
        <a href={actionButton.link} className="bg-orange-600 px-4 py-2 rounded">
          {actionButton.title}
        </a>
      </div>
    </div>
  );
};

export default Header;
