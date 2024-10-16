import { servicesInfo } from "../../constants/services";
import SingleServiceCard from "./singleService";

const ServicesBoard: React.FC = () => {
  return (
    <>
      {/* <div className="w-4/5 border-custom-stacks-gray border-[1px] rounded-xl mt-5"></div> */}
      <div className="flex items-center justify-center bg-custom-content-gray h-10 w-28 rounded-full text-white text-base rotate-custom-services-rotation border-3 drop-shadow-extra-bold mt-3">
        Services
      </div>
      {/* <div>Services</div> */}
      <div className="flex justify-center items-center flex-wrap mt-10 bg-custom-bg-color w-[75%] rounded-2xl p-8 gap-8">
        {servicesInfo.map((service, index) => (
          <SingleServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </>
  );
};

export default ServicesBoard;
