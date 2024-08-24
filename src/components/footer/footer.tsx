import X from "../../assets/FOOTER/X.svg";
import LINKEDIN from "../../assets/FOOTER/LINKEDIN.svg";
import GITHUB from "../../assets/FOOTER/GITHUB.svg";

const PageFooter: React.FC = () => {
  return (
    <>
      <footer className="flex items-center bg-fade-gradient bottom-0 w-full h-24 border-2">
        <div className="w-full h-16 bg-slate-50 rounded-xl mx-6">
          <div className="h-full w-1/12 flex flex-row items-center justify-around border-2 border-black">
            <div className="bg-custom-black">
              <img src={X} alt="X" className="" />
            </div>
            <div className="bg-custom-black">
              <img src={LINKEDIN} alt="X" />
            </div>
            <div className="bg-custom-black">
              <img src={GITHUB} alt="X" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default PageFooter;
