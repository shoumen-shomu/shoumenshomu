import React from "react";

const Button = ({ btnText, className }) => {
  return (
    <button
      className={`font-rubik font-medium text-[24px] text-[#EE5F38] leading-9 py-2.5 px-10.5 rounded-[50px] bg-transparent  border border-[#EE5F38] hover:bg-[#EE5F38] hover:text-white  duration-500 cursor-pointer ${className}`}
    >
      {btnText}
    </button>
  );
};

export default Button;
