import { Link } from "react-router-dom";

const NavContact = () => {
  return (
    <>
      <div className="flex h-12 w-1/5 items-center justify-evenly border-[2px] border-custom-light-gray rounded-full mr-4">
        <Link
          to="/about"
          className="flex flex-row text-custom-light-gray font-poppins font-medium tracking-tight"
        >
          About
        </Link>
        /
        <Link
          to="/skills"
          className="flex flex-row text-custom-light-gray font-poppins font-medium tracking-tight"
        >
          Skills
        </Link>
        /
        <Link
          to="/projects"
          className="text-custom-light-gray font-poppins font-medium tracking-tight"
        >
          Projects
        </Link>
      </div>
    </>
  );
};

export default NavContact;
