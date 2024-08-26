import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
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
        <LazyLoadImage
          src={imageSrc}
          alt={altText}
          className="w-11 text-custom-black drop-shadow-icons"
        />
        <span className="text-custom-black text-sm font-poppins font-medium tracking-tight">
          {label}
        </span>
      </div>
    </>
  );
};

export default SingleStack;
