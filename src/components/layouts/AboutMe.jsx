import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import { FaRegCircleDot } from "react-icons/fa6";

const AboutMe = () => {
  return (
    <div className="py-[100px] bg-[#212428] border-b border-b-[#181A1D]">
      <Container>
        <Flex>
          <div className="w-[570px]">
            <div className="mb-[30px]">
              <p className="font-rubik font-medium text-[24px] text-[#EE5F38] leading-9">
                ABOUT ME
              </p>
              <h2 className="font-heebo font-bold text-[48px] text-white leading-14.5">
                I can design world for leading ui/ux
              </h2>
            </div>
            <p className="font-rubik font-medium text-[24px] text-[#EE5F38] leading-9">
              PERSONAL INFOS:
            </p>
            <div className="py-[18px] flex gap-x-[50px]">
              <div className="left space-y-[20px]">
                <div className="flex items-center gap-x-[7px]">
                  <FaRegCircleDot className={"text-base text-[#EE5F38]"} />
                  <p className=" font-rubik font-normal text-[17px] text-[#E2E8F0] leading-[25.5px]">
                    First Name: Shoumen
                  </p>
                </div>
                <div className="flex items-center gap-x-[7px]">
                  <FaRegCircleDot className={"text-base text-[#EE5F38]"} />
                  <p className=" font-rubik font-normal text-[17px] text-[#E2E8F0] leading-[25.5px]">
                    Address: Bangladesh
                  </p>
                </div>
                <div className="flex items-center gap-x-[7px]">
                  <FaRegCircleDot className={"text-base text-[#EE5F38]"} />
                  <p className=" font-rubik font-normal text-[17px] text-[#E2E8F0] leading-[25.5px]">
                    Age: 28 Years
                  </p>
                </div>
                <div className="flex items-center gap-x-[7px]">
                  <FaRegCircleDot className={"text-base text-[#EE5F38]"} />
                  <p className=" font-rubik font-normal text-[17px] text-[#E2E8F0] leading-[25.5px]">
                    Nationality: Bangladeshi
                  </p>
                </div>
                <div className="flex items-center gap-x-[7px]">
                  <FaRegCircleDot className={"text-base text-[#EE5F38]"} />
                  <p className=" font-rubik font-normal text-[17px] text-[#E2E8F0] leading-[25.5px]">
                    Freelance: Available
                  </p>
                </div>
              </div>
              <div className="right space-y-[20px]">
                <div className="flex items-center gap-x-[7px]">
                  <FaRegCircleDot className={"text-base text-[#EE5F38]"} />
                  <p className=" font-rubik font-normal text-[17px] text-[#E2E8F0] leading-[25.5px]">
                    Last Name: Shomu
                  </p>
                </div>
                <div className="flex items-center gap-x-[7px]">
                  <FaRegCircleDot className={"text-base text-[#EE5F38]"} />
                  <p className=" font-rubik font-normal text-[17px] text-[#E2E8F0] leading-[25.5px]">
                    Phone: +8801755-933871
                  </p>
                </div>
                <div className="flex items-center gap-x-[7px]">
                  <FaRegCircleDot className={"text-base text-[#EE5F38]"} />
                  <p className=" font-rubik font-normal text-[17px] text-[#E2E8F0] leading-[25.5px]">
                    Email: shoumenshomu@gmail.com
                  </p>
                </div>
                <div className="flex items-center gap-x-[7px]">
                  <FaRegCircleDot className={"text-base text-[#EE5F38]"} />
                  <p className=" font-rubik font-normal text-[17px] text-[#E2E8F0] leading-[25.5px]">
                    Whatsapp: +8801755-933871
                  </p>
                </div>
                <div className="flex items-center gap-x-[7px]">
                  <FaRegCircleDot className={"text-base text-[#EE5F38]"} />
                  <p className=" font-rubik font-normal text-[17px] text-[#E2E8F0] leading-[25.5px]">
                    Languages: English, Bengali
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[600px]"></div>
        </Flex>
      </Container>
    </div>
  );
};

export default AboutMe;
