import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import { Progress } from "@/components/ui/progress";
import SkillBar from "../SkillBar";

const Skills = () => {
  return (
    <div className="py-25 bg-[#150a0a] border-b border-b-[#181A1D]">
      <Container>
        <Flex className={"flex-col lg:flex-row lg:justify-between mb-13.75 gap-x-30.75"}>
          <div className="text-center lg:text-left">
            <p className="font-rubik font-medium text-[24px] text-[#EE5F38] leading-9">
              SKILLS
            </p>
            <h2 className="font-heebo font-bold text-[48px] text-white leading-14.5">
              My Technical Expertise & Skills.
            </h2>
          </div>
          <div className="lg:w-[50%] text-center lg:text-left mt-4 lg:mt-0">
            <p className="font-rubik font-normal text-[17px] text-[#E2E8F0] leading-7 lg:w-114.75 w-95">
              I utilize the latest technologies to build scalable web
              applications that exceed client expectations and drive real
              business growth effectively.
            </p>
          </div>
        </Flex>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-56.5">
          <div className="">
            <SkillBar percentage={80} title={"React.js"} />
            <SkillBar percentage={80} title={"Next.js"} />
            <SkillBar percentage={75} title={"JavaScript"} />
            <SkillBar percentage={80} title={"Responsive Web Design"} />
            
          </div>
          <div className="">
            <SkillBar percentage={95} title={"HTML"} />
            <SkillBar percentage={90} title={"CSS"} />
            <SkillBar percentage={90} title={"Tailwind CSS"} />
            <SkillBar percentage={80} title={"Shadcn"} />
            
            
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skills;
