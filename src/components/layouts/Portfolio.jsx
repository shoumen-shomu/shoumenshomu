import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import ecommerceOne from "/src/assets/orebi.png"
import portfolioOne from "/src/assets/Hunt.png"
import portfolioTwo from "/src/assets/maryportfolio.png"

const Portfolio = () => {
  return (
    <div className="py-25 bg-[#212428] border-b border-b-[#181A1D]">
      <Container>
        <Flex className={"justify-between mb-13.75 gap-x-30.75"}>
          <div className="">
            <p className="font-rubik font-medium text-[24px] text-[#EE5F38] leading-9">
              PORTFOLIO
            </p>
            <h2 className="font-heebo font-bold text-[48px] text-white leading-14.5">
              Never compromise for portfolio quality
            </h2>
          </div>
          <div className="w-[50%]">
            <p className="font-rubik font-normal text-[17px] text-[#E2E8F0] leading-7 w-[459px]">
              Promote your skills, case studies, and product ouncems with the
              the branded videoscustomers coming back for services Makes best
              effort.
            </p>
          </div>
        </Flex>
        <div className="">
          <Flex className={"justify-center gap-x-[25px]"}>
            <p  data-filter=".showall" className="font-rubik font-medium text-[18px] text-white leading-6.75 hover:text-[#EE5F38] duration-500 cursor-pointer">Show All</p>
            <p  data-filter=".web" className="font-rubik font-medium text-[18px] text-white leading-6.75 hover:text-[#EE5F38] duration-500 cursor-pointer">Web</p>
            <p  data-filter=".grapics" className="font-rubik font-medium text-[18px] text-white leading-6.75 hover:text-[#EE5F38] duration-500 cursor-pointer">Graphics</p>
            <p  data-filter=".development" className="font-rubik font-medium text-[18px] text-white leading-6.75 hover:text-[#EE5F38] duration-500 cursor-pointer">Development</p>
            <p  data-filter=".mobile" className="font-rubik font-medium text-[18px] text-white leading-6.75 hover:text-[#EE5F38] duration-500 cursor-pointer">Mobile</p>
          </Flex>
        </div>
        <div className="mt-[50px]">
          <div className="grid grid-cols-3 gap-x-[15px]">
            <div className="w-[400px] h-[310px]">
              <Images className={""} imgSrc={ecommerceOne}/>
              <div className="w-full bg-[#EE5F38]">
<p>React</p>

              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
