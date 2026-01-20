import React from "react";

const Button = ({ btnText, className }) => {
  return (
    <button
      className={`py-[10px] px-[42px] rounded-[50px] bg-[#EE5F38] text-white border border-[#EE5F38] hover:bg-transparent hover:text-[#EE5F38] text-[18px] font-medium leading-9 duration-500 cursor-pointer ${className}`}
    >
      {btnText}
    </button>
  );
};

export default Button;
