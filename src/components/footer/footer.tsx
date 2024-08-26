import X from "../../assets/FOOTER/X.svg";
import LINKEDIN from "../../assets/FOOTER/LINKEDIN.svg";
import GITHUB from "../../assets/FOOTER/GITHUB.svg";
import X1 from "../../assets/FOOTER/X1.svg";
import LINKEDIN1 from "../../assets/FOOTER/LINKEDIN1.svg";
import GITHUB1 from "../../assets/FOOTER/GITHUB1.svg";

const PageFooter: React.FC = () => {
  return (
    <>
      <footer className="flex items-center bottom-0 w-full h-28 overflow-hidden bg-custom-bg-color">
        <div className="flex flex-rows justify-between w-full h-16 bg-slate-50 rounded-full mx-6">
          <div className="h-full ml-2 w-[160px] flex flex-row items-center justify-around">
            <div className="flex items-center justify-center w-10 h-10 border-[2px] rounded-full cursor-pointer bg-custom-light-gray">
              <img src={X} alt="X" className="w-4" />
            </div>
            <div className="flex items-center justify-center w-10 h-10 border-[2px] rounded-full cursor-pointer bg-custom-light-gray">
              <img src={LINKEDIN} alt="LINKEDIN" className="" />
            </div>
            <div className="flex items-center justify-center w-10 h-10 border-[2px] rounded-full cursor-pointer bg-custom-light-gray">
              <img src={GITHUB} alt="GITHUB" />
            </div>
          </div>

          <div className="flex items-center w-56 font-poppins font-medium text-sm">
            Made with Love ❤️ ~Bahati
          </div>
          <div className="flex items-center w-48 borer-2 border-black">
            <span className="text-xl">&copy;</span>
            <div className="font-medium text-sm tracking-tight">
              2024 — Copyright
            </div>
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
