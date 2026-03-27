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
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

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
    <div
      id="portfolio"
      className="py-25 bg-[#150a0a] border-b border-b-[#181A1D]"
    >
      <Container>
        <Flex
          className={
            "flex-col lg:flex-row lg:justify-between mb-13.75 gap-x-30.75"
          }
        >
          <div className="text-center lg:text-left">
            <p className="font-rubik font-medium text-[24px] text-[#C1272D] leading-9">
              PORTFOLIO
            </p>
            <h2 className="font-heebo font-bold text-[48px] text-[#D1D5DB] leading-14.5">
              I Never Compromise On Quality.
            </h2>
          </div>
          <div className="lg:w-[50%] text-center lg:text-left mt-4 lg:mt-0">
            <p className="font-rubik font-normal text-[17px] text-[#D1D5DB] leading-7 lg:w-114.75 w-95">
              Check out my recent projects where I turn unique ideas into
              reality with creative design and professional coding standards.
            </p>
          </div>
        </Flex>
        <div className="">
          <Flex className={"justify-center gap-x-6.25"}>
            <p
              data-filter=".showAll"
              className="font-rubik font-medium lg:text-[18px] text-[13px] text-[#D1D5DB] leading-6.75 hover:text-[#C1272D] duration-500 cursor-pointer"
            >
              Show All
            </p>
            <p
              data-filter=".e-Commerce"
              className="font-rubik font-medium lg:text-[18px] text-[13px] text-[#D1D5DB] leading-6.75 hover:text-[#C1272D] duration-500 cursor-pointer"
            >
              e-Commerce
            </p>
            <p
              data-filter=".portfolio"
              C1272D
              className="font-rubik font-medium lg:text-[18px] text-[13px] text-[#D1D5DB] leading-6.75 hover:text-[#C1272D] duration-500 cursor-pointer"
            >
              Portfolio
            </p>
            <p
              data-filter=".landingPage"
              className="font-rubik font-medium lg:text-[18px] text-[13px] text-[#D1D5DB] leading-6.75 hover:text-[#C1272D] duration-500 cursor-pointer"
            >
              Landing Page
            </p>
          </Flex>
        </div>
        <div className="mt-12.5">
          <div
            className="flex flex-wrap gap-x-7.5 gap-y-7.5 justify-center"
            ref={containerRef}
          >
            <div className="w-92.5 h-77.5 group relative mix showAll e-Commerce  ">
              <Images
                className={"w-full h-full object-cover"}
                imgSrc={ecommerceOne}
              />
              <div className="w-full flex flex-col justify-center text-center items-center bg-[#C1272D] absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-90">
                <div className="flex items-center gap-5">
                  <a
                    href="https://github.com/shoumen-shomu/Orebi"
                    target="_blank"
                  >
                    <FaGithub className={" text-white text-[30px]"} />
                  </a>
                  <a href="https://orebi-blond.vercel.app/" target="_blank">
                    <FaArrowUpRightFromSquare
                      className={" text-white text-[25px]"}
                    />
                  </a>
                </div>
                <div className="mt-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  <p className="font-rubik font-bold text-[27px] text-[#E2E8F0] leading-7 pb-[10px]">
                    React
                  </p>
                  <p className="font-rubik font-bold text-[27px] text-[#E2E8F0] leading-7">
                    Orebi
                  </p>
                </div>
              </div>
            </div>
            <div className="w-92.5 h-77.5 group relative mix showAll e-Commerce ">
              <Images
                className={"w-full h-full object-cover"}
                imgSrc={ecommerceTwo}
              />
              <div className="w-full flex flex-col justify-center text-center items-center bg-[#C1272D] absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-90">
                <div className="flex items-center gap-5">
                  <a
                    href="https://github.com/shoumen-shomu/UOMO"
                    target="_blank"
                  >
                    <FaGithub className={" text-white text-[30px]"} />
                  </a>
                  <a
                    href="https://shoumen-shomu.github.io/UOMO/"
                    target="_blank"
                  >
                    <FaArrowUpRightFromSquare
                      className={" text-white text-[25px]"}
                    />
                  </a>
                </div>
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
            <div className="w-92.5 h-77.5 group relative mix showAll portfolio ">
              <Images
                className={"w-full h-full object-cover"}
                imgSrc={portfolioOne}
              />
              <div className="w-full flex flex-col justify-center text-center items-center bg-[#C1272D] absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-90">
                <div className="flex items-center gap-5">
                  <a
                    href="https://github.com/shoumen-shomu/Hunt"
                    target="_blank"
                  >
                    <FaGithub className={" text-white text-[30px]"} />
                  </a>
                  <a
                    href="https://shoumen-shomu.github.io/Hunt/"
                    target="_blank"
                  >
                    <FaArrowUpRightFromSquare
                      className={" text-white text-[25px]"}
                    />
                  </a>
                </div>
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
            <div className="w-92.5 h-77.5 group relative mix showAll portfolio ">
              <Images
                className={"w-full h-full object-cover"}
                imgSrc={portfolioTwo}
              />
              <div className="w-full flex flex-col justify-center text-center items-center bg-[#C1272D] absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-90">
                <div className="flex items-center gap-5">
                  <a
                    href="https://github.com/shoumen-shomu/Hancok"
                    target="_blank"
                  >
                    <FaGithub className={" text-white text-[30px]"} />
                  </a>
                  <a
                    href="https://shoumen-shomu.github.io/Hancok/"
                    target="_blank"
                  >
                    <FaArrowUpRightFromSquare
                      className={" text-white text-[25px]"}
                    />
                  </a>
                </div>
                <div className="mt-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  <p className="font-rubik font-bold text-[27px] text-[#E2E8F0] leading-7 pb-[10px]">
                    Bootstrap
                  </p>
                  <p className="font-rubik font-bold text-[27px] text-[#E2E8F0] leading-7">
                    Hancok
                  </p>
                </div>
              </div>
            </div>
            <div className="w-92.5 h-77.5 group relative mix showAll landingPage ">
              <Images
                className={"w-full h-full object-cover"}
                imgSrc={landingPage}
              />
              <div className="w-full flex flex-col justify-center text-center items-center bg-[#C1272D] absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-90">
                <div className="flex items-center gap-5">
                  <a
                    href="https://github.com/shoumen-shomu/Lime"
                    target="_blank"
                  >
                    <FaGithub className={" text-white text-[30px]"} />
                  </a>
                  <a
                    href="https://lime-beige-three.vercel.app/"
                    target="_blank"
                  >
                    <FaArrowUpRightFromSquare
                      className={" text-white text-[25px]"}
                    />
                  </a>
                </div>
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
            <div className="w-92.5 h-77.5 group relative overflow-hidden mix showAll landingPage">
              <Images
                className={"w-full h-full object-cover"}
                imgSrc={agencyOne}
              />
              <div className="absolute inset-0 bg-[#150a0a]/95 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex flex-col justify-between p-6">
                <div>
                  <h3 className="font-rubik font-bold text-[22px] text-white leading-7 mb-2">
                    Creative
                  </h3>
                  <p className="font-rubik font-normal text-[14px] text-[#D1D5DB] leading-6">
                    A creative landing page built with modern design principles
                    and smooth animations.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 my-4">
                  {["TailwindCSS", "HTML", "CSS"].map((tech) => (
                    <span
                      key={tech}
                      className="text-[12px] font-rubik font-medium text-[#C1272D] border border-[#C1272D]/40 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href="https://github.com/shoumen-shomu/Creative"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-[#C1272D] transition-colors duration-300"
                  >
                    <FaGithub className="text-[20px]" />
                    <span className="font-rubik text-[14px]">GitHub</span>
                  </a>
                  <a
                    href="https://shoumen-shomu.github.io/Creative/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-[#C1272D] transition-colors duration-300"
                  >
                    <FaArrowUpRightFromSquare className="text-[18px]" />
                    <span className="font-rubik text-[14px]">Live Demo</span>
                  </a>
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
