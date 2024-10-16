import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface ServiceProps {
  icon: string;
  title: string;
  description: string;
}

const SingleServiceCard: React.FC<ServiceProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col justify-between w-[310px] min-h-[220px] bg-slate-50 backdrop-blur-[12px] rounded-xl p-6 transition-all duration-300 hover:shadow-lg">
      <div className="flex flex-col items-center">
        <LazyLoadImage src={icon} alt={title} className="w-10 mb-4" />
        <h3 className="font-poppins text-[19px] tracking-tighter text-center font-semibold text-custom-light-gray mb-3">
          {title}
        </h3>
      </div>
      <p className="font-poppins text-sm text-center text-custom-light-gray flex-grow">
        {description}
      </p>
    </div>
  );
};

export default SingleServiceCard;
