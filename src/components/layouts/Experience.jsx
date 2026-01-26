import React from "react";
import Container from "../Container";
import Flex from "../Flex";

const Experience = () => {
  return (
    <div className="py-25 bg-[#212428] border-b border-b-[#181A1D]">
      <Container>
        <Flex className={"justify-between mb-13.75 gap-x-30.75"}>
          <div className="">
            <p className="font-rubik font-medium text-[24px] text-[#EE5F38] leading-9">
              EXPERICNCE AND EDUCATION
            </p>
            <h2 className="font-heebo font-bold text-[48px] text-white leading-14.5">
              Resume of Experience and Education
            </h2>
          </div>
          <div className="w-[50%]">
            <p className="font-rubik font-normal text-[17px] text-[#E2E8F0] leading-7 w-[459px]">
              Promote your blog posts, case udie, and product ouncems with the
              the branded videoscustomers coming back for services Makes best
              effort.
            </p>
          </div>
        </Flex>
        
      </Container>
    </div>
  );
};

export default Experience;
