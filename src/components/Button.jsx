import React from "react";

const Button = ({ btnText, className }) => {
  return (
    <button
      className={`font-rubik font-medium text-[24px] text-[#C1272D] leading-9 py-2.5 px-10.5 rounded-[50px] bg-transparent  border border-[#C1272D] hover:bg-[#C1272D] hover:text-[#FFFFFF]  duration-500 cursor-pointer ${className}`}
    >
      {btnText}
    </button>
  );
};

export default Button;
