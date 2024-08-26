import { Link } from "react-router-dom";

const NavContact = () => {
  return (
    <>
      <div className="flex h-12 items-center justify-evenly border-[2px] border-custom-light-gray rounded-full mr-4">
        <Link
          to="/https://www.linkedin.com/in/bahati-yves-439aab1a2/"
          className="flex flex-row text-custom-light-gray font-poppins font-medium tracking-tight"
        >
          About
        </Link>
        /
        <Link
          to="/https://github.com/bahati10"
          className="flex flex-row text-custom-light-gray font-poppins font-medium tracking-tight"
        >
          Projects
        </Link>
        /
        <Link
          to="/https://x.com/Bahati____"
          className="flex flex-row items-center text-custom-light-gray font-poppins font-medium tracking-tight mx-5"
        >
          Skills
        </Link>
      </div>
    </>
  );
};

export default NavContact;
