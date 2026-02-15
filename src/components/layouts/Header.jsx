import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaBars } from "react-icons/fa6";


const Header = () => {
  return (
    <div className="bg-[#181A1D] fixed w-full top-0 left-0 z-50">
      <Container>
        <div className="py-5 lg:px-0 ">
          <Flex className={"justify-between"}>
            {/* logo part start */}
            <div className="w-[30%]">
              <Link>
                <Images imgSrc={logo} />
              </Link>
            </div>
            {/* logo part end */}
             {/* menu part start */}
            <div className="hidden lg:block">
              <ul className="flex gap-x-11.25">
                <Link to={"/"}>
                  <li className="font-rubik font-medium text-[20px] text-[#E2E8F0] leading-7.5 hover:text-[#EE5F38] duration-500">
                    Home
                  </li>
                </Link>

                <li className="font-rubik font-medium text-[20px] text-[#E2E8F0] leading-7.5 hover:text-[#EE5F38] duration-500">
                  <HashLink smooth to="#about">
                    About
                  </HashLink>
                </li>

                <li className="font-rubik font-medium text-[20px] text-[#E2E8F0] leading-7.5 hover:text-[#EE5F38] duration-500">
                  <HashLink smooth to="#services">
                    Services
                  </HashLink>
                </li>

                <li className="font-rubik font-medium text-[20px] text-[#E2E8F0] leading-7.5 hover:text-[#EE5F38] duration-500">
                  <HashLink smooth to="#portfolio">
                    Portfolio
                  </HashLink>
                </li>

                <li className="font-rubik font-medium text-[20px] text-[#E2E8F0] leading-7.5 hover:text-[#EE5F38] duration-500">
                  <HashLink smooth to="#contact">
                    Contact
                  </HashLink>
                </li>
              </ul>
            </div>
             {/* menu part End */}
             
              {/* download part start */}
            <div className="hidden lg:block">
              <div className="flex items-center gap-x-2.5 py-2 px-4.5 rounded-[32px] bg-[#EE5F38] text-white border border-[#EE5F38] hover:bg-transparent duration-500 cursor-pointer">
                <div className="flex py-1.75 px-1.75 items-center justify-center rounded-full bg-white text-[#EE5F38]">
                  <MdOutlineFileDownload className="text-3xl" />
                </div>
                <p className="font-rubik font-medium text-[18px] text-white leading-6.75">
                  Download CV
                </p>
              </div>
            </div>
            {/* download part End */}
            <div className="">
              <FaBars className="text-white" />
            </div>
          </Flex>
        </div>
      </Container>
    </div>
  );
};

export default Header;
