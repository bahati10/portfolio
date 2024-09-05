import { Link } from "react-router-dom";
import NavLogo from "../../assets/LOGO.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const NotFoundDisplay: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="flex flex-row items-center justify-center text-[160px] font-poppins font-semibold text-custom-black leading-[170px]">
          4
          <LazyLoadImage src={NavLogo} alt="Main Page logo" className="w-32" />4
        </div>
        <div className="text-center text-2xl text-custom-black font-semibold font-poppins tracking-tighter">
          Oops, page not found!
        </div>
        <div className="flex justify-center text-custom-gray">
          <Link
            to="/"
            className="w-28 mt-4 p-3 rounded-full bg-custom-black text-center text-xs font-semibold"
          >
            GO HOME
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundDisplay;
