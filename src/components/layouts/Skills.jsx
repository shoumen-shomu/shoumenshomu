import React from "react";
import Container from "../Container";
import Flex from "../Flex";


const Skills = () => {
  return (
    <div className="py-25 bg-[#050d0d] border-b border-b-[#C1272D]/20">
      <Container>
        <Flex
          className={
            "flex-col lg:flex-row lg:justify-between mb-13.75 gap-x-30.75"
          }
        >
          <div className="text-center lg:text-left">
            <p className="font-rubik font-medium text-[24px] text-[#C1272D] leading-9">
              SKILLS
            </p>
            <h2 className="font-heebo font-bold text-[48px] text-[#FFFFFF] leading-14.5">
              My Technical Expertise & Skills.
            </h2>
          </div>
          <div className="lg:w-[50%] text-center lg:text-left mt-4 lg:mt-0">
            <p className="font-rubik font-normal text-[17px] text-[#CBD5E1] leading-7 lg:w-114.75 w-95">
              I utilize the latest technologies to build scalable web
              applications that exceed client expectations and drive real
              business growth effectively.
            </p>
          </div>
        </Flex>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
          {/* ── Card 1 : Frontend Core ── */}
          <div
            className="relative bg-neutral-900 border border-neutral-800
                 rounded-2xl p-6 overflow-hidden
                 hover:-translate-y-1 transition-transform duration-300 "
          >
            <div className="absolute top-0 left-0 right-0 h-0.75 bg-red-600 rounded-t-2xl" />
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-red-600/10 flex items-center justify-center text-lg">
                ⚡
              </div>
              <div>
                <span className="block font-rubik font-normal text-[10px] text-[#C1272D]/70 tracking-[3px] uppercase ">
                  Category 01
                </span>
                <p className="font-rubik font-normal text-[17px] text-[#ffffff] tracking-tight">
                  Frontend Core
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-[11px] px-3 py-1.5 rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700 hover:text-white hover:bg-red-600/10 hover:border-red-600/40 transition-all duration->00">
                HTML
              </span>
              <span className="text-[11px] px-3 py-1.5 rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700 hover:text-white hover:bg-red-600/10 hover:border-red-600/40 transition-all duration->00">
                CSS
              </span>
              <span className="text-[11px] px-3 py-1.5 rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700 hover:text-white hover:bg-red-600/10 hover:border-red-600/40 transition-all duration->00">
                JavaScript
              </span>
              <span className="text-[11px] px-3 py-1.5 rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700 hover:text-white hover:bg-red-600/10 hover:border-red-600/40 transition-all duration->00">
                React.js
              </span>
              <span className="text-[11px] px-3 py-1.5 rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700 hover:text-white hover:bg-red-600/10 hover:border-red-600/40 transition-all duration->00">
                Next.js
              </span>
              <span className="text-[11px] px-3 py-1.5 rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700 hover:text-white hover:bg-red-600/10 hover:border-red-600/40 transition-all duration->00">
                Responsive Design
              </span>
            </div>
          </div>
          {/* ── Card 2 : Styling & UI ── */}
          <div
            className="relative bg-neutral-900 border border-neutral-800
                 rounded-2xl p-6 overflow-hidden
                 hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-orange-400 rounded-t-2xl" />
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-orange-400/10 flex items-center justify-center text-lg">
                🎨
              </div>
              <div>
                <span className="block font-rubik font-normal text-[10px] text-[#C1272D]/70 tracking-[3px] uppercase">
                  Category 02
                </span>
                <p className="font-rubik font-normal text-[17px] text-[#ffffff] tracking-tight">
                  Styling & UI
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-[11px] px-3 py-1.5 rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700 hover:text-white hover:bg-orange-400/10 hover:border-orange-400/40 transition-all duration-200">
                Tailwind CSS
              </span>
              <span className="text-[11px] px-3 py-1.5 rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700 hover:text-white hover:bg-orange-400/10 hover:border-orange-400/40 transition-all duration-200">
                Bootstrap
              </span>
              <span className="text-[11px] px-3 py-1.5 rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700 hover:text-white hover:bg-orange-400/10 hover:border-orange-400/40 transition-all duration-200">
                Shadcn
              </span>
            </div>
          </div>
          {/* ── Card 3 : State Management ── */}
          <div
            className="relative bg-neutral-900 border border-neutral-800
                 rounded-2xl p-6 overflow-hidden
                 hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="absolute top-0 left-0 right-0 h-0.75 bg-cyan-300 rounded-t-2xl" />
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-cyan-300/10 flex items-center justify-center text-lg">
                🔄
              </div>
              <div>
                <span className="block font-rubik font-normal text-[10px] text-[#C1272D]/70 tracking-[3px] uppercase">
                  Category 03
                </span>
                <p className="font-rubik font-normal text-[17px] text-[#ffffff] tracking-tight">
                  State Management
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-[11px] px-3 py-1.5 rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700 hover:text-white hover:bg-cyan-300/10 hover:border-cyan-300/40 transition-all duration-200">
                Redux
              </span>
              <span className="text-[11px] px-3 py-1.5 rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700 hover:text-white hover:bg-cyan-300/10 hover:border-cyan-300/40 transition-all duration-200">
                Zustand
              </span>
            </div>
          </div>
          {/* ── Card 4 : Backend & APIs ── */}
          <div
            className="relative bg-neutral-900 border border-neutral-800
                 rounded-2xl p-6 overflow-hidden
                 hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-emerald-400 rounded-t-2xl" />
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-emerald-400/10 flex items-center justify-center text-lg">
                🔥
              </div>
              <div>
                <span className="block font-rubik font-normal text-[10px] text-[#C1272D]/70 tracking-[3px] uppercase">
                  Category 04
                </span>
                <p className="font-rubik font-normal text-[17px] text-[#ffffff] tracking-tight">
                  Backend & APIs
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-[11px] px-3 py-1.5 rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700 hover:text-white hover:bg-emerald-400/10 hover:border-emerald-400/40 transition-all duration-200">
                Node.js
              </span>
              <span className="text-[11px] px-3 py-1.5 rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700 hover:text-white hover:bg-emerald-400/10 hover:border-emerald-400/40 transition-all duration-200">
                Firebase
              </span>
              <span className="text-[11px] px-3 py-1.5 rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700 hover:text-white hover:bg-emerald-400/10 hover:border-emerald-400/40 transition-all duration-200">
                Context APIs
              </span>
              <span className="text-[11px] px-3 py-1.5 rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700 hover:text-white hover:bg-emerald-400/10 hover:border-emerald-400/40 transition-all duration-200">
                Postman
              </span>
            </div>
          </div>
          {/* ── Card 5 : Dev Tools ── */}
          <div
            className="relative bg-neutral-900 border border-neutral-800
                 rounded-2xl p-6 overflow-hidden
                 hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-purple-400 rounded-t-2xl" />
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-purple-400/10 flex items-center justify-center text-lg">
                🛠️
              </div>
              <div>
                <span className="block font-rubik font-normal text-[10px] text-[#C1272D]/70 tracking-[3px] uppercase">
                  Category 05
                </span>
                <p className="font-rubik font-normal text-[17px] text-[#ffffff] tracking-tight">Dev Tools</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-[11px] px-3 py-1.5 rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700 hover:text-white hover:bg-purple-400/10 hover:border-purple-400/40 transition-all duration-200">
                Git
              </span>
              <span className="text-[11px] px-3 py-1.5 rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700 hover:text-white hover:bg-purple-400/10 hover:border-purple-400/40 transition-all duration-200">
                GitHub
              </span>
              <span className="text-[11px] px-3 py-1.5 rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700 hover:text-white hover:bg-purple-400/10 hover:border-purple-400/40 transition-all duration-200">
                NPM
              </span>
            </div>
          </div>
          {/* ── Card 6 : Deployment ── */}
          <div
            className="relative bg-neutral-900 border border-neutral-800
                 rounded-2xl p-6 overflow-hidden 
                 hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="absolute top-0 left-0 right-0 h-0.75 bg-sky-400 rounded-t-2xl" />
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-sky-400/10 flex items-center justify-center text-lg">
                🚀
              </div>
              <div>
                <span className="block font-rubik font-normal text-[10px] text-[#C1272D]/70 tracking-[3px] uppercase">
                  Category 06
                </span>
                <p className="font-rubik font-normal text-[15px] text-[#ffffff] tracking-tight">
                  Deployment
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-[11px] px-3 py-1.5 rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700 hover:text-white hover:bg-sky-400/10 hover:border-sky-400/40 transition-all duration-200">
                Vercel
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skills;
