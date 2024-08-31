import {SKILLSF, SKILLSL, SKILLSW} from "../constants/index.jsx";
import Canvas from "../Effects/Canvas.jsx";

let color1 = "#ffffff";
let color2 = "#83998b";
let color3 = "#515151";
let color4 = "#6dda83";
const Skills = () => {
  return (
    <div className="Skills container mx-auto" id="skills">
      <h2 className="mb-12 mt-20 text-center text-4xl">Skills</h2>
      <div className="competence flex">
        <div className=" w-1/3 mx-1 flex flex-col rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-950 px-4 py-10 lg:px-20">
          {/*{Canvas(color1, color2, color3, color4)}*/}
          {SKILLSL.map((skill, index) => (
            <div key={index} className="mb-4 flex items-center justify-between">
              <div className="flex items-center">
                {skill.icon}
                <h3 className={"px-6 ml-6 text-xl lg:text-3xl text-white"}>
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className=" w-1/3 mx-1 flex flex-col rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-950 px-4 py-10 lg:px-20">
          {SKILLSF.map((skill, index) => (
            <div key={index} className="mb-8 flex items-center justify-between">
              <div className="flex items-center">
                {skill.icon}
                <h3 className={"px-6 text-xl lg:text-3xl text-white"}>
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className=" w-1/3 mx-1 flex flex-col rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-950 px-4 py-10 lg:px-20">
          {SKILLSW.map((skill, index) => (
            <div key={index} className="mb-8 flex items-center justify-between">
              <div className="flex items-center">
                {skill.icon}
                <h3 className={"px-6 text-xl lg:text-3xl text-white"}>
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
      </div>
      </div>
    </div>
  );
};

export default Skills;