import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import hero from "../../assets/shoumen.jpg";
import Button from "../Button";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

const Banner = () => {
  return (
    <div className="">
      <div className="bg-[#150a0a] lg:pt-50 pt-40 pb-16 ">
        <Container>
          <Flex className={"gap-x-25 flex-col lg:flex-row"}>
           
             {/* Banner Image Start */}
            <div className="ml-4 lg:ml-0 lg:hidden">
              <Images className={"rounded-2xl"} imgSrc={hero} />
            </div>
            {/* Banner Image End */}

            {/* Banner Content Start */}

            <div className="lg:w-250 w-full mt-10 lg:mt-0">
              <div className="text-center lg:text-left">
                <p className="font-rubik font-light text-[24px] text-[#C1272D] leading-9">
                  HELLO I'M
                </p>
                <h1 className="font-heebo font-bold text-[60px] text-[#D1D5DB] leading-22.5 ">
                  Shoumen Shomu!
                </h1>
                <h2 className="font-heebo font-normal text-[32px] text-[#D1D5DB] lg:leading-12">
                  Front-End Developer
                </h2>
                <p className="font-rubik font-normal lg:text-[20px] text-[20px] text-[#D1D5DB] leading-7.5  max-w-105 pt-4.5 pb-7.5">
                  Passionate about crafting pixel-perfect, responsive user
                  interfaces using React, JavaScript, and Tailwind CSS. I turn
                  creative designs into interactive web experiences.
                </p>
              </div>
              <div className="max-w-132.5 lg:flex items-center gap-x-4.5">
                <div className="text-center lg:text-left">
                  <HashLink smooth to="#about">
                    <Button className={"inline-block"} btnText={"About Me"} />
                  </HashLink>
                </div>
                <div className="lg:flex items-center gap-x-3.75 mt-4.5 lg:mt-0">
                  <p className="font-heebo font-semibold text-[22px] text-[#D1D5DB] leading-8.25 text-center">
                    Follow Me:
                  </p>
                  {/* Social Links Start */}
                  <div className="flex items-center gap-x-2.5 lg:mt-0 mt-4.5 justify-center lg:justify-start">
                    <a
                      href="https://github.com/shoumen-shomu"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="text-[20px] text-[#EE5F38] w-10 h-10 border border-[#EE5F38] rounded-[50%] flex justify-center items-center hover:text-white hover:bg-[#EE5F38] duration-500">
                        <FaGithub />
                      </div>
                    </a>
                    <a
                      href="https://www.facebook.com/shoumenshomudev/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="text-[20px] text-[#EE5F38] w-10 h-10 border border-[#EE5F38] rounded-[50%] flex justify-center items-center hover:text-white hover:bg-[#EE5F38] duration-500">
                        <FaFacebookF />
                      </div>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/shoumenshomu/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="text-[20px] text-[#EE5F38] w-10 h-10 border border-[#EE5F38] rounded-[50%] flex justify-center items-center hover:text-white hover:bg-[#EE5F38] duration-500">
                        <FaLinkedin />
                      </div>
                    </a>
                    <a
                      href="https://x.com/Shoumenshomudev"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="text-[20px] text-[#EE5F38] w-10 h-10 border border-[#EE5F38] rounded-[50%] flex justify-center items-center hover:text-white hover:bg-[#EE5F38] duration-500">
                        <FaXTwitter />
                      </div>
                    </a>
                  </div>
                </div>
                {/* Social Links End */}
              </div>
            </div>
            {/* Banner Content End */}
             {/* Banner Image Start */}
            <div className="ml-4 lg:ml-0 lg:block hidden">
              <Images className={"rounded-2xl"} imgSrc={hero} />
            </div>
            {/* Banner Image End */}
          </Flex>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
