import React, { useEffect, useRef } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import creativeweb from "../../assets/creativeweb.png";
import umoecommerce from "../../assets/uomo.png";
import eduact from "../../assets/Eduact.png";
import projectnirvoya from "../../assets/projectnirvoya.png";
import prozen from "../../assets/prozen.png";
import orebi from "../../assets/orebi.png";
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
      className="py-25 bg-[#050d0d] border-b border-b-[#C1272D]/20"
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
            <h2 className="font-heebo font-bold text-[48px] text-[#FFFFFF] leading-14.5">
              I Never Compromise On Quality.
            </h2>
          </div>
          <div className="lg:w-[50%] text-center lg:text-left mt-4 lg:mt-0">
            <p className="font-rubik font-normal text-[17px] text-[#CBD5E1] leading-7 lg:w-114.75 w-95">
              Check out my recent projects where I turn unique ideas into
              reality with creative design and professional coding standards.
            </p>
          </div>
        </Flex>
        <div className="">
          <Flex className={"justify-center gap-x-6.25"}>
            <p
              data-filter=".showAll"
              className="font-rubik font-medium lg:text-[18px] text-[12px] text-[#FFFFFF] leading-6.75 hover:text-[#C1272D] duration-500 cursor-pointer"
            >
              Show All
            </p>
            <p
              data-filter=".e-Commerce"
              className="font-rubik font-medium lg:text-[18px] text-[12px] text-[#FFFFFF] leading-6.75 hover:text-[#C1272D] duration-500 cursor-pointer"
            >
              e-Commerce
            </p>
            <p
              data-filter=".portfolio"
              C1272D
              className="font-rubik font-medium lg:text-[18px] text-[12px] text-[#FFFFFF] leading-6.75 hover:text-[#C1272D] duration-500 cursor-pointer"
            >
              Portfolio
            </p>
            <p
              data-filter=".landingPage"
              className="font-rubik font-medium lg:text-[18px] text-[12px] text-[#FFFFFF] leading-6.75 hover:text-[#C1272D] duration-500 cursor-pointer"
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
            <div className="w-92.5 h-77.5 group relative overflow-hidden mix showAll portfolio landingPage">
              <Images
                className={"w-full h-full object-cover"}
                imgSrc={creativeweb}
              />
              <div className="absolute inset-0 bg-[#150a0a]/95 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex flex-col justify-between p-6">
                <div>
                  <h3 className="font-rubik font-bold text-[22px] text-white leading-7 mb-2">
                    Creative Web
                  </h3>
                  <p className="font-rubik font-normal text-[14px] text-[#D1D5DB] leading-6">
                    A landing page for web and software department of Creative
                    IT Institute.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 my-4">
                  {["HTML", "TailwindCSS", "JavaScript"].map((tech) => (
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
                    href="https://github.com/shoumen-shomu/creativeWeb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-[#C1272D] transition-colors duration-300"
                  >
                    <FaGithub className="text-[20px]" />
                    <span className="font-rubik text-[14px]">GitHub</span>
                  </a>
                  <a
                    href="https://creative-web-six.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-[#C1272D] transition-colors duration-300"
                  >
                    <FaArrowUpRightFromSquare className="text-[18px]" />
                    <span className="font-rubik text-[14px]">Live</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-92.5 h-77.5 group relative overflow-hidden mix showAll e-Commerce">
              <Images
                className={"w-full h-full object-cover"}
                imgSrc={umoecommerce}
              />
              <div className="absolute inset-0 bg-[#150a0a]/95 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex flex-col justify-between p-6">
                <div>
                  <h3 className="font-rubik font-bold text-[22px] text-white leading-7 mb-2">
                    Uomo e-commerce
                  </h3>
                  <p className="font-rubik font-normal text-[14px] text-[#D1D5DB] leading-6">
                    About UomoUI is a modern, responsive, and pixel-perfect
                    frontend for an eCommerce platform
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 my-4">
                  {["React.Js","TailwindCSS","Firebase","Zustand","Framer Motion","TanStack React Query"].map((tech) => (
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
                    href="https://github.com/shoumen-shomu/uomo-ui"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-[#C1272D] transition-colors duration-300"
                  >
                    <FaGithub className="text-[20px]" />
                    <span className="font-rubik text-[14px]">GitHub</span>
                  </a>
                  <a
                    href="https://uomo-ui.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-[#C1272D] transition-colors duration-300"
                  >
                    <FaArrowUpRightFromSquare className="text-[18px]" />
                    <span className="font-rubik text-[14px]">Live</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-92.5 h-77.5 group relative overflow-hidden mix showAll portfolio">
              <Images
                className={"w-full h-full object-cover"}
                imgSrc={eduact}
              />
              <div className="absolute inset-0 bg-[#150a0a]/95 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex flex-col justify-between p-6">
                <div>
                  <h3 className="font-rubik font-bold text-[22px] text-white leading-7 mb-2">
                    eduAct
                  </h3>
                  <p className="font-rubik font-normal text-[14px] text-[#D1D5DB] leading-6">
                    Modern, responsive, and precision-crafted—eduAct redefines
                    digital learning.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 my-4">
                  {["React.Js", "TailwindCSS"].map((tech) => (
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
                    href="https://github.com/shoumen-shomu/eduActFigma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-[#C1272D] transition-colors duration-300"
                  >
                    <FaGithub className="text-[20px]" />
                    <span className="font-rubik text-[14px]">GitHub</span>
                  </a>
                  <a
                    href="https://edu-act-figma.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-[#C1272D] transition-colors duration-300"
                  >
                    <FaArrowUpRightFromSquare className="text-[18px]" />
                    <span className="font-rubik text-[14px]">Live</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-92.5 h-77.5 group relative overflow-hidden mix showAll e-Commerce">
              <Images
                className={"w-full h-full object-cover"}
                imgSrc={projectnirvoya}
              />
              <div className="absolute inset-0 bg-[#150a0a]/95 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex flex-col justify-between p-6">
                <div>
                  <h3 className="font-rubik font-bold text-[22px] text-white leading-7 mb-2">
                    Project Nirvoya
                  </h3>
                  <p className="font-rubik font-normal text-[14px] text-[#D1D5DB] leading-6">
                    Experience a pixel-perfect and fully responsive e-commerce
                    journey with Nirvoya.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 my-4">
                  {["React.Js", "TailwindCSS", "React Hooks"].map((tech) => (
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
            <div className="w-92.5 h-77.5 group relative overflow-hidden mix showAll landingPage">
              <Images
                className={"w-full h-full object-cover"}
                imgSrc={prozen}
              />
              <div className="absolute inset-0 bg-[#150a0a]/95 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex flex-col justify-between p-6">
                <div>
                  <h3 className="font-rubik font-bold text-[22px] text-white leading-7 mb-2">
                    Prozen
                  </h3>
                  <p className="font-rubik font-normal text-[14px] text-[#D1D5DB] leading-6">
                    Innovative business solutions for everyone.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 my-4">
                  {["Next.Js", "TailwindCSS"].map((tech) => (
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
            <div className="w-92.5 h-77.5 group relative overflow-hidden mix showAll e-Commerce">
              <Images
                className={"w-full h-full object-cover"}
                imgSrc={orebi}
              />
              <div className="absolute inset-0 bg-[#150a0a]/95 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex flex-col justify-between p-6">
                <div>
                  <h3 className="font-rubik font-bold text-[22px] text-white leading-7 mb-2">
                    Orebi
                  </h3>
                  <p className="font-rubik font-normal text-[14px] text-[#D1D5DB] leading-6">
                    A high-performance e-commerce platform built for speed, responsiveness, and a flawless user experience.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 my-4">
                  {["React.Js", "Tailwindcss", "Context API"].map((tech) => (
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
