import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import hero from "../../assets/hero.png";
import Button from "../Button";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";


const Banner = () => {
  return (
    <div className="bg-[#181A1D]">
      <div className="bg-[url(/src/assets/bannerBg.png)] bg-cover bg-center bg-no-repeat pt-50 pb-16">
        <Container>
          <Flex className={"gap-x-25"}>
            <div className="">
              <Images imgSrc={hero} />
            </div>
            <div className="w-175.5">
              <p className="font-rubik font-light text-[24px] text-[#EE5F38] leading-9">
                HELLO I'M
              </p>
              <h1 className="font-heebo font-bold text-[60px] text-white leading-22.5">
                Shoumen Shomu!
              </h1>
              <h2 className="font-heebo font-normal text-[32px] text-white leading-12">
                Front-End Developer
              </h2>
              <p className="font-rubik font-normal text-[20px] text-[#E2E8F0] leading-[30px] w-[420px] pt-[18px] pb-[30px]">
                There are many variations of sum availabled in alley of type and
                scrambled it some.
              </p>
              <div className="w-132.5 flex items-center gap-x-4.5">
                <div className="">
                  <Button className={"inline-block"} btnText={"About Me"} />
                </div>
                <div className="flex items-center gap-x-3.75">
                  <p className="font-heebo font-semibold text-[22px] text-white leading-[33px]">
                    Follow Me:
                  </p>
                  {/* Social Links Start */}
                  <div className="flex items-center gap-x-2.5">
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
          </Flex>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
