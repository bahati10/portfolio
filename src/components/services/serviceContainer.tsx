import ServicesBoard from "./servicesBoard";

const ServicesContainer: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-slate-50 bg-cus py-10">
        <ServicesBoard />
      </div>
    </>
  );
};

export default ServicesContainer;
