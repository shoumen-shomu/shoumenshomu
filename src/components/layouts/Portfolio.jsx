import React, { useEffect, useRef } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import ecommerceOne from "../../assets/orebi.png";
import ecommerceTwo from "../../assets/uomo.png";
import portfolioOne from "../../assets/Hunt.png";
import portfolioTwo from "../../assets/Hancock.png";
import landingPage from "../../assets/Lime.png";
import agencyOne from "../../assets/Digitalproducagency.png";
import mixitup from "mixitup";
import { FaGithub } from "react-icons/fa";

const Portfolio = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      mixitup(containerRef.current, {
        animation: {
          duration: 400,
        },
        selectors: {
          target: ".mix",
        },
      });
    }
  });
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
            <p
              data-filter=".showAll"
              className="font-rubik font-medium text-[18px] text-white leading-6.75 hover:text-[#EE5F38] duration-500 cursor-pointer"
            >
              Show All
            </p>
            <p
              data-filter=".e-Commerce"
              className="font-rubik font-medium text-[18px] text-white leading-6.75 hover:text-[#EE5F38] duration-500 cursor-pointer"
            >
              e-Commerce
            </p>
            <p
              data-filter=".portfolio"
              className="font-rubik font-medium text-[18px] text-white leading-6.75 hover:text-[#EE5F38] duration-500 cursor-pointer"
            >
              Portfolio
            </p>
            <p
              data-filter=".landingPage"
              className="font-rubik font-medium text-[18px] text-white leading-6.75 hover:text-[#EE5F38] duration-500 cursor-pointer"
            >
              Landing Page
            </p>
          </Flex>
        </div>
        <div className="mt-[50px]" >
          <div className="flex flex-wrap gap-x-[30px] gap-y-[30px] justify-center" ref={containerRef}>
            <div className="w-[370px] h-[310px] group relative mix showAll e-Commerce  ">
              <Images
                className={"w-full h-full object-cover"}
                imgSrc={ecommerceOne}
              />
              <div className="w-full flex flex-col justify-center text-center items-center bg-[#EE5F38] absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-90">
                <a href="https://github.com/shoumen-shomu" target="_blank">
                  <FaGithub className={" text-white text-[30px]"} />
                </a>
                <div className="mt-[20px] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  <p className="font-rubik font-bold text-[27px] text-[#E2E8F0] leading-7 pb-[10px]">
                    React
                  </p>
                  <p className="font-rubik font-bold text-[27px] text-[#E2E8F0] leading-7">
                    Orebi
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[370px] h-[310px] group relative mix showAll e-Commerce ">
              <Images
                className={"w-full h-full object-cover"}
                imgSrc={ecommerceTwo}
              />
              <div className="w-full flex flex-col justify-center text-center items-center bg-[#EE5F38] absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-90">
                <a href="https://github.com/shoumen-shomu" target="_blank">
                  <FaGithub className={" text-white text-[30px]"} />
                </a>
                <div className="mt-[20px] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  <p className="font-rubik font-bold text-[27px] text-[#E2E8F0] leading-7 pb-[10px]">
                    Tailwind CSS
                  </p>
                  <p className="font-rubik font-bold text-[27px] text-[#E2E8F0] leading-7">
                    Uomo
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[370px] h-[310px] group relative mix showAll portfolio ">
              <Images
                className={"w-full h-full object-cover"}
                imgSrc={portfolioOne}
              />
              <div className="w-full flex flex-col justify-center text-center items-center bg-[#EE5F38] absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-90">
                <a href="https://github.com/shoumen-shomu" target="_blank">
                  <FaGithub className={" text-white text-[30px]"} />
                </a>
                <div className="mt-[20px] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  <p className="font-rubik font-bold text-[27px] text-[#E2E8F0] leading-7 pb-[10px]">
                    Bootstrap
                  </p>
                  <p className="font-rubik font-bold text-[27px] text-[#E2E8F0] leading-7">
                    Hunt
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[370px] h-[310px] group relative mix showAll portfolio ">
              <Images
                className={"w-full h-full object-cover"}
                imgSrc={portfolioTwo}
              />
              <div className="w-full flex flex-col justify-center text-center items-center bg-[#EE5F38] absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-90">
                <a href="https://github.com/shoumen-shomu" target="_blank">
                  <FaGithub className={" text-white text-[30px]"} />
                </a>
                <div className="mt-[20px] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  <p className="font-rubik font-bold text-[27px] text-[#E2E8F0] leading-7 pb-[10px]">
                    Bootstrap
                  </p>
                  <p className="font-rubik font-bold text-[27px] text-[#E2E8F0] leading-7">
                    Hancok
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[370px] h-[310px] group relative mix showAll landingPage ">
              <Images
                className={"w-full h-full object-cover"}
                imgSrc={landingPage}
              />
              <div className="w-full flex flex-col justify-center text-center items-center bg-[#EE5F38] absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-90">
                <a href="https://github.com/shoumen-shomu" target="_blank">
                  <FaGithub className={" text-white text-[30px]"} />
                </a>
                <div className="mt-[20px] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  <p className="font-rubik font-bold text-[27px] text-[#E2E8F0] leading-7 pb-[10px]">
                    React
                  </p>
                  <p className="font-rubik font-bold text-[27px] text-[#E2E8F0] leading-7">
                    Lime
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[370px] h-[310px] group relative mix showAll landingPage ">
              <Images
                className={"w-full h-full object-cover"}
                imgSrc={agencyOne}
              />
              <div className="w-full flex flex-col justify-center text-center items-center bg-[#EE5F38] absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-90">
                <a href="https://github.com/shoumen-shomu" target="_blank">
                  <FaGithub className={" text-white text-[30px]"} />
                </a>
                <div className="mt-[20px] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  <p className="font-rubik font-bold text-[27px] text-[#E2E8F0] leading-7 pb-[10px]">
                    TailwindCSS
                  </p>
                  <p className="font-rubik font-bold text-[27px] text-[#E2E8F0] leading-7">
                    Creative
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
