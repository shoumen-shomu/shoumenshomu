import React, { useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="bg-[#050d0d]/60 backdrop-blur-md fixed w-full top-0 left-0 z-50 ">
      <Container>
        <div className="py-5 lg:px-0 ">
          <Flex className={"justify-between"}>
            {/* logo part start */}
            <div className="lg:w-[15%] w-[45%]">
              <Link>
                <Images imgSrc={logo} />
              </Link>
            </div>
            {/* logo part end */}
            {/* menu part start */}
            <div className="hidden lg:block">
              <ul className="flex gap-x-11.25">
                <Link to={"/"}>
                  <li className="font-rubik font-medium text-[20px] text-[#ffffff] leading-7.5 hover:text-[#C1272D] duration-500">
                    Home
                  </li>
                </Link>

                <li className="font-rubik font-medium text-[20px] text-[#ffffff] leading-7.5 hover:text-[#C1272D] duration-500">
                  <HashLink smooth to="#about">
                    About
                  </HashLink>
                </li>

                <li className="font-rubik font-medium text-[20px] text-[#ffffff] leading-7.5 hover:text-[#C1272D] duration-500">
                  <HashLink smooth to="#services">
                    Services
                  </HashLink>
                </li>

                <li className="font-rubik font-medium text-[20px] text-[#ffffff] leading-7.5 hover:text-[#C1272D] duration-500">
                  <HashLink smooth to="#portfolio">
                    Portfolio
                  </HashLink>
                </li>

                <li className="font-rubik font-medium text-[20px] text-[#ffffff] leading-7.5 hover:text-[#C1272D] duration-500">
                  <HashLink smooth to="#contact">
                    Contact
                  </HashLink>
                </li>
              </ul>
            </div>
            {/* menu part End */}

            {/* download part start */}
            <a
              href="/resume.pdf"
              download="Shoumen_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <div className="hidden lg:block">
                <div className="flex items-center gap-x-2.5 py-2 px-4.5 rounded-[32px] bg-[#C1272D] text-[#D1D5DB] border border-[#C1272D] hover:bg-transparent duration-500 cursor-pointer">
                  <div className="flex py-1.75 px-1.75 items-center justify-center rounded-full bg-[#ffffff] text-[#C1272D]">
                    <MdOutlineFileDownload className="text-3xl" />
                  </div>
                  <p className="font-rubik font-medium text-[18px] text-[#ffffff] leading-6.75">
                    Resume
                  </p>
                </div>
              </div>
            </a>
            {/* download part End */}

            {/* Mobile Part menu start */}
            <div
              className="lg:hidden cursor-pointer"
              onClick={() => setShow(!show)}
            >
              {show ? (
                <RxCross2 className="text-[#D1D5DB] text-[30px]" />
              ) : (
                <FaBars className="text-[#D1D5DB] text-[30px]" />
              )}
            </div>
            {/* Mobile Part menu End */}

            {/* Menu Overly start */}
            <div
              className={`lg:hidden fixed top-0 left-0 w-full h-100 bg-[#050d0d]/90 flex flex-col items-center justify-center gap-y-8 transition-all duration-500 ${show ? "translate-y-17" : "-translate-y-full"} `}
            >
              <HashLink
                onClick={() => setShow(false)}
                className="font-rubik font-medium text-[20px] text-[#ffffff] leading-7.5 hover:text-[#EE5F38] duration-500"
                smooth
                to="#home"
              >
                Home
              </HashLink>

              <HashLink
                onClick={() => setShow(false)}
                className="font-rubik font-medium text-[20px] text-[#ffffff] leading-7.5 hover:text-[#EE5F38] duration-500"
                smooth
                to="#about"
              >
                About
              </HashLink>

              <HashLink
                onClick={() => setShow(false)}
                className="font-rubik font-medium text-[20px] text-[#ffffff] leading-7.5 hover:text-[#EE5F38] duration-500"
                smooth
                to="#services"
              >
                Services
              </HashLink>

              <HashLink
                onClick={() => setShow(false)}
                className="font-rubik font-medium text-[20px] text-[#ffffff] leading-7.5 hover:text-[#EE5F38] duration-500"
                smooth
                to="#portfolio"
              >
                Portfolio
              </HashLink>

              <HashLink
                onClick={() => setShow(false)}
                className="font-rubik font-medium text-[20px] text-[#ffffff] leading-7.5 hover:text-[#EE5F38] duration-500"
                smooth
                to="#contact"
              >
                Contact
              </HashLink>
            </div>
            {/* Menu Overly end */}
          </Flex>
        </div>
      </Container>
    </div>
  );
};

export default Header;
