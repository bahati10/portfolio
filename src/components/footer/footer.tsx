import X from "../../assets/FOOTER/X.svg";
import LINKEDIN from "../../assets/FOOTER/LINKEDIN.svg";
import GITHUB from "../../assets/FOOTER/GITHUB.svg";
import { Link } from "react-router-dom";

const PageFooter: React.FC = () => {
  return (
    <>
      <footer className="flex items-center bottom-0 w-full h-24 overflow-hidden bg-custom-bg-color">
        <div className="flex flex-rows justify-between w-full h-16 bg-slate-50 rounded-full mx-6">
          <div className="h-full ml-2 w-[160px] flex flex-row items-center justify-around">
            <Link
              to="https://www.linkedin.com/in/bahati-yves-439aab1a2"
              target="blank"
              className="flex items-center justify-center w-10 h-10 border-[2px] rounded-full cursor-pointer bg-custom-light-gray"
            >
              <img src={X} alt="X" className="w-4" />
            </Link>
            <Link
              to="https://github.com/bahati10"
              target="blank"
              className="flex items-center justify-center w-10 h-10 border-[2px] rounded-full cursor-pointer bg-custom-light-gray"
            >
              <img src={LINKEDIN} alt="LINKEDIN" className="" />
            </Link>
            <Link
              to="/https://x.com/Bahati____"
              target="blank"
              className="flex items-center justify-center w-10 h-10 border-[2px] rounded-full cursor-pointer bg-custom-light-gray"
            >
              <img src={GITHUB} alt="GITHUB" />
            </Link>
          </div>
          <div className="flex items-center w-56 borer-2 border-black font-poppins font-medium">
            Made with Love ❤️ ~ Bahati
          </div>
          <div className="flex items-center w-48 borer-2 border-black">
            <span className="text-xl">&copy;</span>
            <div className="font-medium">2024 — Copyright</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default PageFooter;
