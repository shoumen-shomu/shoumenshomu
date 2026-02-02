import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import firstcompo from "../../assets/service1stcom.png";
import secendcompo from "../../assets/service2ndcom.png";
import thirdcompo from "/../../assets/service3rdcom.png";
import fourthcompo from "../../assets/service4thcom.png";
import fifthcompo from "../../assets/service5thcom.png";
import sixthcompo from "../../assets/service6thcom.png";

const Services = () => {
  return (
    <div className="py-[90px] bg-[#212428] border-b border-b-[#181A1D]">
      <Container>
        <Flex className={"justify-between mb-13.75 gap-x-30.75"}>
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
        <div className=" grid grid-cols-3 gap-x-[30px] gap-y-[30px]">
          <div className="px-[40px] pb-[40px] shadow-[0_0_20px_rgba(0,0,0,0.1)] overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            <Images className={"mb-[20px]"} imgSrc={firstcompo} />
            <h3 className="font-heebo font-bold text-[25px] text-white leading-[37.5px]">
              Web Development
            </h3>
            <p className="font-rubik font-normal text-[17px] text-[#E2E8F0] leading-[25.5px] w-[290px] py-[15px]">
              Promote your blog posts, case udie, and product ouncems nts with
              the the branded videos.
            </p>
            <div className="flex items-center gap-x-[11px]">
              <div className="w-[7px] h-[7px] bg-[#48CDA0]"></div>
              <a
                href="https://github.com/shoumen-shomu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="font-rubik font-semibold text-[17px] text-[#48CDA0] hover:text-white duration-300">
                  Read More
                </p>
              </a>
            </div>
          </div>
          <div className="px-[40px] pb-[40px] shadow-[0_0_20px_rgba(0,0,0,0.1)] overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            <Images className={"mb-[20px]"} imgSrc={secendcompo} />
            <h3 className="font-heebo font-bold text-[25px] text-white leading-[37.5px]">
              Creative Design
            </h3>
            <p className="font-rubik font-normal text-[17px] text-[#E2E8F0] leading-[25.5px] w-[290px] py-[15px]">
              Promote your blog posts, case udie, and product ouncems nts with
              the the branded videos.
            </p>
            <div className="flex items-center gap-x-[11px]">
              <div className="w-[7px] h-[7px] bg-[#ED5F38]"></div>
              <a
                href="https://github.com/shoumen-shomu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="font-rubik font-semibold text-[17px] text-[#ED5F38] hover:text-white duration-300">
                  Read More
                </p>
              </a>
            </div>
          </div>
          <div className="px-[40px] pb-[40px] shadow-[0_0_20px_rgba(0,0,0,0.1)] overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            <Images className={"mb-[20px]"} imgSrc={thirdcompo} />
            <h3 className="font-heebo font-bold text-[25px] text-white leading-[37.5px]">
              Project Consultancy
            </h3>
            <p className="font-rubik font-normal text-[17px] text-[#E2E8F0] leading-[25.5px] w-[290px] py-[15px]">
              Promote your blog posts, case udie, and product ouncems nts with
              the the branded videos.
            </p>
            <div className="flex items-center gap-x-[11px]">
              <div className="w-[7px] h-[7px] bg-[#007EFF]"></div>
              <a
                href="https://github.com/shoumen-shomu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="font-rubik font-semibold text-[17px] text-[#007EFF] hover:text-white duration-300">
                  Read More
                </p>
              </a>
            </div>
          </div>
          <div className="px-[40px] pb-[40px] shadow-[0_0_20px_rgba(0,0,0,0.1)] overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            <Images className={"mb-[20px]"} imgSrc={fourthcompo} />
            <h3 className="font-heebo font-bold text-[25px] text-white leading-[37.5px]">
              24/7 Support
            </h3>
            <p className="font-rubik font-normal text-[17px] text-[#E2E8F0] leading-[25.5px] w-[290px] py-[15px]">
              Promote your blog posts, case udie, and product ouncems nts with
              the the branded videos.
            </p>
            <div className="flex items-center gap-x-[11px]">
              <div className="w-[7px] h-[7px] bg-[#E6BC13]"></div>
              <a
                href="https://github.com/shoumen-shomu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="font-rubik font-semibold text-[17px] text-[#E6BC13] hover:text-white duration-300">
                  Read More
                </p>
              </a>
            </div>
          </div>
          <div className="px-[40px] pb-[40px] shadow-[0_0_20px_rgba(0,0,0,0.1)] overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            <Images className={"mb-[20px]"} imgSrc={fifthcompo} />
            <h3 className="font-heebo font-bold text-[25px] text-white leading-[37.5px]">
              Awesome Idea
            </h3>
            <p className="font-rubik font-normal text-[17px] text-[#E2E8F0] leading-[25.5px] w-[290px] py-[15px]">
              Promote your blog posts, case udie, and product ouncems nts with
              the the branded videos.
            </p>
            <div className="flex items-center gap-x-[11px]">
              <div className="w-[7px] h-[7px] bg-[#ED38D1]"></div>
              <a
                href="https://github.com/shoumen-shomu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="font-rubik font-semibold text-[17px] text-[#ED38D1] hover:text-white duration-300">
                  Read More
                </p>
              </a>
            </div>
          </div>
          <div className="px-[40px] pb-[40px] shadow-[0_0_20px_rgba(0,0,0,0.1)] overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            <Images className={"mb-[20px]"} imgSrc={sixthcompo} />
            <h3 className="font-heebo font-bold text-[25px] text-white leading-[37.5px]">
              Development Design
            </h3>
            <p className="font-rubik font-normal text-[17px] text-[#E2E8F0] leading-[25.5px] w-[290px] py-[15px]">
              Promote your blog posts, case udie, and product ouncems nts with
              the the branded videos.
            </p>
            <div className="flex items-center gap-x-[11px]">
              <div className="w-[7px] h-[7px] bg-[#A348CD]"></div>
              <a
                href="https://github.com/shoumen-shomu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="font-rubik font-semibold text-[17px] text-[#A348CD] hover:text-white duration-300">
                  Read More
                </p>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
    
  );
};

export default Services;
