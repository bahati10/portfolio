import { Link } from "react-router-dom";

const NavContact = () => {
  return (
    <>
      <div className="flex h-12 w-1/5 items-center justify-evenly border-2 border-custom-light-gray rounded-full mr-4">
        <Link
          to="/https://www.linkedin.com/in/bahati-yves-439aab1a2/"
          className="text-custom-light-gray font-poppins font-medium tracking-tight"
        >
          Linkedin
        </Link>
        /
        <Link
          to="/https://github.com/bahati10"
          className="text-custom-light-gray font-poppins font-medium tracking-tight"
        >
          GitHub
        </Link>
        /
        <Link
          to="/https://x.com/Bahati____"
          className="text-custom-light-gray font-poppins font-medium tracking-tight"
        >
          Twitter
        </Link>
      </div>
    </>
  );
};

export default NavContact;
