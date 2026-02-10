import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import { Progress } from "@/components/ui/progress";
import SkillBar from "../SkillBar";

const Skills = () => {
  return (
    <div className="py-25 bg-[#212428] border-b border-b-[#181A1D]">
      <Container>
        <Flex className={"justify-between mb-13.75 gap-x-30.75"}>
          <div className="">
            <p className="font-rubik font-medium text-[24px] text-[#EE5F38] leading-9">
              SKILLS
            </p>
            <h2 className="font-heebo font-bold text-[48px] text-white leading-14.5">
              My Technical Expertise & Skills.
            </h2>
          </div>
          <div className="w-[50%]">
            <p className="font-rubik font-normal text-[17px] text-[#E2E8F0] leading-7 w-[459px]">
              I utilize the latest technologies to build scalable web
              applications that exceed client expectations and drive real
              business growth effectively.
            </p>
          </div>
        </Flex>
        <div className="flex gap-x-56.5">
          <div className="">
            <SkillBar percentage={56} title={"Node.js"} />
            <SkillBar percentage={75} title={"JavaScript"} />
            <SkillBar percentage={90} title={"Web Design"} />
          </div>
          <div className="">
            <SkillBar percentage={100} title={"HTML"} />
            <SkillBar percentage={90} title={"CSS"} />
            <SkillBar percentage={70} title={"React.js"} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skills;
