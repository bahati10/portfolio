import SingleStack from "./singleStack.tsx";
import NODEJS from "../../assets/STACKS/JS.svg";
import JS1 from "../../assets/STACKS/JS1.svg";
import MONGO1 from "../../assets/STACKS/MONGO1.svg";
import TS from "../../assets/STACKS/TYPESCRIPT.svg";
import GRAPHQL from "../../assets/STACKS/GRAPHQL.svg";
import NEXTJS from "../../assets/STACKS/NEXTJS.svg";
import TAILWIND from "../../assets/STACKS/TAILWINDCSS.svg";
import FIGMA from "../../assets/STACKS/FIGMA.svg";
import POSTGRES from "../../assets/STACKS/POSTGRES1.svg";
import REACTJS from "../../assets/STACKS/REACTJS.svg";

const StacksBar: React.FC = () => {
  const skills = [
    { imageSrc: NODEJS, altText: "Node JS logo", label: "Node" },
    { imageSrc: REACTJS, altText: "React JS logo", label: "React" },
    {
      imageSrc: MONGO1,
      altText: "Mongo DB logo",
      label: "MongoDB",
      isMongo: true,
    },
    { imageSrc: FIGMA, altText: "Figma logo", label: "Figma" },
    { imageSrc: JS1, altText: "Javascript logo", label: "Javascript" },
    { imageSrc: POSTGRES, altText: "Postgres logo", label: "Postgres" },
    { imageSrc: NEXTJS, altText: "Next JS logo", label: "Next" },
    { imageSrc: TS, altText: "Typescript logo", label: "Typescript" },
    { imageSrc: GRAPHQL, altText: "Graphql logo", label: "Graphql" },
    { imageSrc: TAILWIND, altText: "Tailwind logo", label: "Tailwind CSS" },
  ];
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full bg-slate-50 rounded-xl drop-shadow-xl shadow-custom-gray-900">
        <div className="my-10 font-poppins font-bold text-center text-3xl text-fade-gradient tracking-tight leading-10">
          The Development <br />
          Skills behind my work
        </div>
        <div className="w-4/5 border-custom-stacks-gray border-[1px] rounded-xl"></div>

        <div
          className="flex items-center justify-center bg-custom-content-gray h-10 w-28 rounded-full text-white text-base rotate-custom-title-rotation border-3 drop-shadow-extra-bold"
          style={{ marginTop: "-22px" }}
        >
          stacks
        </div>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-20 mb-20">
          {skills.map((skill, index) => (
            <SingleStack
              key={index}
              imageSrc={skill.imageSrc}
              altText={skill.altText}
              label={skill.label}
              isMongo={skill.isMongo}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default StacksBar;
