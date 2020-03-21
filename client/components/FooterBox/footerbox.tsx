import React from "react";

const leftLinks = [
  { text: "Help" },
  { text: "Reddit App" },
  { text: "Reddit Coins" },
  { text: "Reddit Premium" },
  { text: "Reddit Gifts" },
  { text: "Communities" },
  { text: "Top Posts" },
  { text: "Topics" },
];

const rightLinks = [
  { text: "About" },
  { text: "Careers" },
  { text: "Press" },
  { text: "Advertise" },
  { text: "Blog" },
  { text: "Terms" },
  { text: "Content Policy" },
  { text: "Privacy Policy" },
  { text: "Mod Policy" },
];

export default function FooterBox() {
  return (
    <div className="footerbox">
      <div className="footerbox__links">
        <div className="footerbox__list">
          {leftLinks.map(({ text }) => (
            <a key={text}>{text}</a>
          ))}
        </div>

        <div className="footerbox__list">
          {rightLinks.map(({ text }) => (
            <a key={text}>{text}</a>
          ))}
        </div>
      </div>

      <div className="footerbox__copyright">
        Definitely Not Reddit Inc &copy; 2020
      </div>
    </div>
  );
}
