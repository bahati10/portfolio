import { Link } from "react-router-dom";
import NavLogo from "../../assets/LOGO.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const NotFoundDisplay: React.FC = () => {
  return (
    <>
      <div>
        <div className="flex flex-row items-center justify-center text-[160px] font-righteous font-semibold text-custom-black leading-[150px]">
          4
          <LazyLoadImage src={NavLogo} alt="Main Page logo" className="w-28" />4
        </div>
        <div className="text-center text-xl text-custom-black font-medium font-roboto tracking-tight">
          Oops, page not found!
        </div>
        <div className="flex justify-center text-custom-gray">
          <Link
            to="/"
            className="flex items-center justify-center w-28 h-12 mt-4 p-3 rounded-full bg-custom-black text-center text-xs font-semibold drop-shadow-semi-bold"
          >
            GO HOME
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundDisplay;
