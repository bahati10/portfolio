import React, { useEffect, useState } from "react";
import ExpandButton from "./expandButton";
import SingleSocialApp from "./socialApp";
import XICON from "../../assets/FOOTER/X.svg";
import LINKEDIN from "../../assets/FOOTER/LINKEDIN.svg";
import GITHUB from "../../assets/FOOTER/GITHUB.svg";
import CloseButton from "./closeButton";

const SocialsButton: React.FC = () => {
  const [isExpanded, setIsExapanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const toggleExpand = () => {
    setIsExapanded(!isExpanded);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight - 52) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialApps = [
    {
      appLogo: XICON,
      altText: "X icon",
      appUrl: "https://x.com/Bahati____",
    },
    {
      appLogo: LINKEDIN,
      altText: "Linkedin Logo",
      appUrl: "https://www.linkedin.com/in/bahati-yves-439aab1a2",
    },
    {
      appLogo: GITHUB,
      altText: "Github Logo",
      appUrl: "https://github.com/bahati10",
    },
  ];

  return (
    <>
      <div
        className={`fixed overflow-hidden right-10 bottom-4 z-50 transform transition-all duration-500 ease-in-out
        ${
          isVisible
            ? "opacity-100 max-h-[1000px] translate-y-0"
            : "opacity-0 max-h-0 translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center">
          <div
            className={`flex flex-col items-center space-y-2 mb-2 transition-all duration-500 ease-in-out ${
              isExpanded
                ? "opacity-100 max-h-[1000px] translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            {isExpanded &&
              socialApps.map((socialApp, index) => (
                <SingleSocialApp
                  key={index}
                  appLogo={socialApp.appLogo}
                  altText={socialApp.altText}
                  appUrl={socialApp.appUrl}
                />
              ))}
          </div>
          <button onClick={toggleExpand} className="outline-none border-none">
            {isExpanded ? <CloseButton /> : <ExpandButton />}
          </button>
        </div>
      </div>
    </>
  );
};

export default SocialsButton;
