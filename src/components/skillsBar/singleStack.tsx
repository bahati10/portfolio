import React from "react";
interface singleStackProps {
  imageSrc: string;
  altText: string;
  label: string;
}

const SingleStack: React.FC<singleStackProps> = ({
  imageSrc,
  altText,
  label,
}) => {
  return (
    <>
      <div className="h-10 w-60 flex flex-row items-center justify-center mx-2 gap-2">
        <img src={imageSrc} alt={altText} className="w-11 text-custom-black" />
        <span className="text-custom-black text-sm font-poppins font-medium tracking-tight">
          {label}
        </span>
      </div>
    </>
  );
};

export default SingleStack;
