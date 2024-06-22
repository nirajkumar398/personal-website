import React from "react";
import "../designSystem/Form/form.css";

const LINKS = [
  {
    title: "GeeksforGeeks",
    url: "https://auth.geeksforgeeks.org/user/zero2infinity/profile",
    logo: "https://media.geeksforgeeks.org/gfg-gg-logo.svg",
  },
  {
    title: "InterviewBit",
    url: "https://www.interviewbit.com/profile/zero2infinity/",
    logo: "https://www.interviewbit.com/_next/static/media/brand.6cf9233b.svg",
  },
  {
    title: "LeetCode",
    url: "https://leetcode.com/u/zero-infinity/",
    logo: "https://assets.leetcode.com/static_assets/public/images/LeetCode_logo_rvs.png",
  },
  {
    title: "HackerRank",
    url: "https://www.hackerrank.com/profile/nirajkumar13398",
    logo: "https://hrcdn.net/fcore/assets/brand/logo-new-white-green-a5cb16e0ae.svg",
  },
];

const Footer = () => {
  return (
    <div
      className="footer-container"
      style={{ background: "#e1e1e1", borderTop: "1px solid black" }}
    >
      <div className="footer-content">
        <div className="footer-title">Coding Profile</div>
        <div className="footer-links">
          {LINKS.map((link, index) => (
            <a key={index} href={link.url} className="footer-link">
              <img
                src={link.logo}
                alt={`${link.title} Logo`}
                className="footer-logo"
              />
              <span className="footer-link-text">{link.title}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
