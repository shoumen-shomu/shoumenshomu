import React from "react";

const SkillBar = ({ title, percentage }) => {
  return (
    <div className="w-full mb-8">
      {/* Skill Name */}
      <h3 className="font-rubik font-medium text-[18px] text-white leading-7 mb-1 ">{title}</h3>

      {/* Main Progress Bar */}
      <div className="relative lg:w-118 w-full h-full py-0.75 pl-0.75 bg-slate-700 rounded-full">
        
        {/* Color Fill */}
        <div
          className="h-1.5 bg-[#FF5538] rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>

        {/* Bubbble */}
        <div
          className="absolute top-0 -mt-9 flex flex-col items-center"
          style={{ left: `${percentage}%`, transform: "translateX(-50%)" }}
        >
          {/* Bubble Body */}
          <div className="relative bg-[#FF5538] font-rubik font-medium text-[12px] text-white leading-4 py-1 px-2 rounded mb-1">
            {percentage}%
            
            {/*(Arrow) */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#FF5538]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;

