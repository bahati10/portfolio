import SingleStack from "./singleStack.tsx";
import NODEJS from "../../assets/STACKS/JS.svg";
import JS1 from "../../assets/STACKS/JS1.svg";
import MONGO1 from "../../assets/STACKS/Vector.svg";
import TS from "../../assets/STACKS/TYPESCRIPT.svg";
import GRAPHQL from "../../assets/STACKS/GRAPHQL.svg";
import NEXTJS from "../../assets/STACKS/NEXTJS.svg";
import TAILWIND from "../../assets/STACKS/TAILWINDCSS.svg";
import FIGMA from "../../assets/STACKS/FIGMA.svg";
import POSTGRES from "../../assets/STACKS/POSTGRES1.svg";
import REACTJS from "../../assets/STACKS/REACTJS.svg";

const StacksBar: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full bg-custom-gray rounded-xl drop-shadow-xl shadow-custom-gray-900">
        <div className="my-10 font-poppins font-bold text-center text-3xl text-fade-gradient tracking-tight leading-10">
          The Development <br />
          Skills behind my work
        </div>
        <div className="w-2/3 border-custom-content-gray border-[1px] rounded-xl"></div>

        <div
          className="flex items-center justify-center bg-custom-content-gray h-10 w-28 rounded-full text-white text-base rotate-custom-title-rotation border-3 shadow-2xl"
          style={{ marginTop: "-22px" }}
        >
          stacks
        </div>
        <div className="w-full mt-4 h-48 flex flex-row flex-wrap justify-center items-center mb-14">
          <SingleStack imageSrc={NODEJS} altText="Node JS logo" label="Node" />
          <SingleStack
            imageSrc={REACTJS}
            altText="React JS logo"
            label="React"
          />
          <div className="h-20 w-60 flex flex-row items-center justify-center mx-2 gap-2">
            <img
              src={MONGO1}
              alt="Mongo DB logo"
              className="w-6 text-custom-content-gray"
            />
            <span className="text-custom-black text-sm font-poppins font-medium tracking-tight">
              MongoDB
            </span>
          </div>
          <SingleStack imageSrc={FIGMA} altText=" Figma logo" label="Figma" />
          <div className="h-20 w-60 flex flex-row items-center justify-center mx-2 gap-2">
            <img
              src={JS1}
              alt="Javascript logo"
              className="w-8 text-custom-content-gray"
            />
            <span className="text-custom-black text-sm font-poppins font-medium tracking-tight">
              Javascript
            </span>
          </div>
          <SingleStack
            imageSrc={POSTGRES}
            altText="Postgres logo"
            label="Postgres"
          />
          <SingleStack imageSrc={NEXTJS} altText="Next JS logo" label="Next" />
          <SingleStack
            imageSrc={TS}
            altText="Typescript logo"
            label="Typescript"
          />
          <SingleStack
            imageSrc={GRAPHQL}
            altText="Graphql logo"
            label="Graphql"
          />
          <SingleStack
            imageSrc={TAILWIND}
            altText="Tailwind logo"
            label="Tailwind"
          />
        </div>
      </div>
    </>
  );
};

export default StacksBar;
