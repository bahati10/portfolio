import { Link } from "react-router-dom";
import X1 from "../../assets/FOOTER/X1.svg";
import LINKEDIN1 from "../../assets/FOOTER/LINKEDIN1.svg";
import GITHUB1 from "../../assets/FOOTER/GITHUB1.svg";
import PROJECT from "../../assets/PROJECTS.svg";
import SKILLS from "../../assets/skills.svg";
import ABOUT from "../../assets/ABOUT.svg";

const NavContact = () => {
  return (
    <>
      <div className="flex h-12 items-center justify-evenly border-[2px] border-custom-light-gray rounded-full mr-4">
        <Link
          to="/https://www.linkedin.com/in/bahati-yves-439aab1a2/"
          className="flex flex-row items-center text-custom-light-gray font-poppins font-medium tracking-tight mx-5"
        >
          <img src={ABOUT} alt="" />
          &nbsp; About
        </Link>
        /
        <Link
          to="/https://github.com/bahati10"
          className="flex flex-row items-center text-custom-light-gray font-poppins font-medium tracking-tight mx-5"
        >
          <img src={PROJECT} alt="" />
          &nbsp; Projects
        </Link>
        /
        <Link
          to="/https://x.com/Bahati____"
          className="flex flex-row items-center text-custom-light-gray font-poppins font-medium tracking-tight mx-5"
        >
          <img src={SKILLS} alt="" />
          &nbsp; SKILLS
        </Link>
      </div>
    </>
  );
};

export default NavContact;
