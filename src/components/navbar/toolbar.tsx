import { useState } from "react";
import COPYICON from "../../assets/COPYICON.svg";
import TICK from "../../assets/TICK.svg";

const NavEmail: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("bahatiyves10@gmail.com").then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <>
      <div
        className="relative flex items-center h-full w-64 cursor-copy"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="absolute h-11 rounded-3xl  w-64 font-medium flex items-center justify-center font-poppins tracking-tighter bg-custom-gray text-custom-black transition duration-500 ease-in-out"
          style={{
            opacity: isHovered ? 0 : 1,
            transform: isHovered ? "rotateX(-90deg)" : "rotateX(0)",
          }}
        >
          bahatiyves10@gmail.com
        </div>
        <div
          className="h-11 rounded-3xl bg-custom-gray w-64 font-medium flex items-center justify-center font-poppins tracking-tighter text-custom-black transition duration-500 ease-in-out"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? "rotateX(0)" : "rotateX(-90deg)",
          }}
          onClick={handleCopyEmail}
        >
          {isCopied ? (
            <>
              Copied
              <img src={TICK} alt="TIck icon" className="w-5 ml-1" />
            </>
          ) : (
            "click to copy"
          )}
          <img
            src={COPYICON}
            alt="Copy icon"
            className="w-5 ml-1"
            style={{
              display: isCopied ? "none" : "block",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default NavEmail;
