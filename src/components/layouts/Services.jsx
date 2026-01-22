import React from "react";
import Container from "../Container";
import Flex from "../Flex";

const Services = () => {
  return (
    <div className="py-[90px] bg-[#212428]">
      <Container>
        <Flex className={"justify-between mb-[55px]"}>
          <div className="">
            <p className="font-rubik font-medium text-[24px] text-[#EE5F38] leading-9">
              CREATIVE SERVICE
            </p>
            <h2 className="font-heebo font-bold text-[48px] text-white leading-14.5">
              What can i do for service clients you
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

export default Services;
