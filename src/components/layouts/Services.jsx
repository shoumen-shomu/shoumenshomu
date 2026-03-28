import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import firstcompo from "../../assets/serviceonecom.png";
import secendcompo from "../../assets/servicetwocom.png";
import thirdcompo from "../../assets/servicethirdcom.png";
import fourthcompo from "../../assets/servicefourtcom.png";
import fifthcompo from "../../assets/servicefifthcom.png";
import sixthcompo from "../../assets/servicesixthcom.png";

const Services = () => {
  return (
    <div
      id="services"
      className="py-22.5 bg-[#050d0d] border-b border-b-[#C1272D]/20"
    >
      <Container>
        <Flex
          className={
            "flex-col lg:flex-row lg:justify-between mb-13.75 gap-x-30.75"
          }
        >
          <div className="text-center lg:text-left">
            <p className="font-rubik font-medium text-[24px] text-[#C1272D] leading-9">
              CREATIVE SERVICE
            </p>
            <h2 className="font-heebo font-bold text-[48px] text-[#FFFFFF] leading-14.5">
              Services I Provide For Your Business.
            </h2>
          </div>
          <div className="lg:w-[50%] text-center lg:text-left mt-4 lg:mt-0">
            <p className="font-rubik font-normal text-[17px] text-[#CBD5E1] leading-7 lg:w-114.75 w-95">
              Create stunning interfaces, user flows, and responsive layouts
              with the latest frameworks ensuring clients receive high quality
              solutions for their business.
            </p>
          </div>
        </Flex>
        <div className=" grid lg:grid-cols-3 grid-cols-1 gap-x-7.5 gap-y-7.5">
          <div className="px-10 pb-10 shadow-[0_0_40px_rgba(193,39,45,0.15)] overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            <Images className={"mb-5"} imgSrc={firstcompo} />
            <h3 className="font-heebo font-bold text-[25px] text-[#FFFFFF] leading-[37.5px]">
              Web Development
            </h3>
            <p className="font-rubik font-normal text-[17px] text-[#D1D5DB] leading-[25.5px] w-72.5 py-3.75">
              I build fast, responsive, and secure websites tailored to meet
              your specific business needs perfectly.
            </p>
            <div className="flex items-center gap-x-2.75">
              <div className="w-1.75 h-1.75 bg-[#48CDA0]"></div>
              <a
                href="https://github.com/shoumen-shomu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="font-rubik font-semibold text-[17px] text-[#48CDA0] hover:text-[#D1D5DB] duration-300">
                  Read More
                </p>
              </a>
            </div>
          </div>
          <div className="px-10 pb-10 shadow-[0_0_40px_rgba(193,39,45,0.15)] overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            <Images className={"mb-5"} imgSrc={secendcompo} />
            <h3 className="font-heebo font-bold text-[25px] text-[#FFFFFF] leading-[37.5px]">
              Creative Design
            </h3>
            <p className="font-rubik font-normal text-[17px] text-[#D1D5DB] leading-[25.5px] w-72.5 py-3.75">
              I create stunning visuals and unique branding designs that will
              captivate your audience and customers.
            </p>
            <div className="flex items-center gap-x-2.75">
              <div className="w-1.75 h-1.75 bg-[#ED5F38]"></div>
              <a
                href="https://github.com/shoumen-shomu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="font-rubik font-semibold text-[17px] text-[#ED5F38] hover:text-[#D1D5DB] duration-300">
                  Read More
                </p>
              </a>
            </div>
          </div>
          <div className="px-10 pb-10 shadow-[0_0_40px_rgba(193,39,45,0.15)] overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            <Images className={"mb-5"} imgSrc={thirdcompo} />
            <h3 className="font-heebo font-bold text-[25px] text-[#FFFFFF] leading-[37.5px]">
              Project Consultancy
            </h3>
            <p className="font-rubik font-normal text-[17px] text-[#D1D5DB] leading-[25.5px] w-72.5 py-3.75">
              I offer expert advice and strategic planning to ensure your
              projects succeed and deliver results.
            </p>
            <div className="flex items-center gap-x-[11px]">
              <div className="w-1.75 h-1.75 bg-[#007EFF]"></div>
              <a
                href="https://github.com/shoumen-shomu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="font-rubik font-semibold text-[17px] text-[#007EFF] hover:text-[#D1D5DB] duration-300">
                  Read More
                </p>
              </a>
            </div>
          </div>
          <div className="px-10 pb-10 shadow-[0_0_40px_rgba(193,39,45,0.15)] overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            <Images className={"mb-5"} imgSrc={fourthcompo} />
            <h3 className="font-heebo font-bold text-[25px] text-[#FFFFFF] leading-[37.5px]">
              24/7 Support
            </h3>
            <p className="font-rubik font-normal text-[17px] text-[#D1D5DB] leading-[25.5px] w-72.5 py-3.75">
              I provide round the clock assistance to resolve any technical
              issues you might face instantly.
            </p>
            <div className="flex items-center gap-x-[11px]">
              <div className="w-1.75 h-1.75 bg-[#E6BC13]"></div>
              <a
                href="https://github.com/shoumen-shomu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="font-rubik font-semibold text-[17px] text-[#E6BC13] hover:text-[#D1D5DB] duration-300">
                  Read More
                </p>
              </a>
            </div>
          </div>
          <div className="px-10 pb-10 shadow-[0_0_40px_rgba(193,39,45,0.15)] overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            <Images className={"mb-5"} imgSrc={fifthcompo} />
            <h3 className="font-heebo font-bold text-[25px] text-[#FFFFFF] leading-[37.5px]">
              Awesome Idea
            </h3>
            <p className="font-rubik font-normal text-[17px] text-[#D1D5DB] leading-[25.5px] w-72.5 py-3.75">
              I turn your raw ideas into live projects using smart code and
              design
            </p>
            <div className="flex items-center gap-x-[11px]">
              <div className="w-1.75 h-1.75 bg-[#ED38D1]"></div>
              <a
                href="https://github.com/shoumen-shomu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="font-rubik font-semibold text-[17px] text-[#ED38D1] hover:text-[#D1D5DB] duration-300">
                  Read More
                </p>
              </a>
            </div>
          </div>
          <div className="px-10 pb-10 shadow-[0_0_40px_rgba(193,39,45,0.15)] overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            <Images className={"mb-5"} imgSrc={sixthcompo} />
            <h3 className="font-heebo font-bold text-[25px] text-[#FFFFFF] leading-[37.5px]">
              Development Design
            </h3>
            <p className="font-rubik font-normal text-[17px] text-[#D1D5DB] leading-[25.5px] w-72.5 py-3.75">
              I design intuitive user interfaces that look great and function
              seamlessly for the best experience.
            </p>
            <div className="flex items-center gap-x-2.75">
              <div className="w-1.75 h-1.75 bg-[#A348CD]"></div>
              <a
                href="https://github.com/shoumen-shomu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="font-rubik font-semibold text-[17px] text-[#A348CD] hover:text-[#D1D5DB] duration-300">
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
