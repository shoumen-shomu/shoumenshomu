import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import { FaRegCircleDot } from "react-icons/fa6";
import Button from "../Button";
import InfoItem from "../InfoItem";

const AboutMe = () => {
  return (
    <div id="about" className="py-[100px] bg-[#212428] border-b border-b-[#181A1D]">
      <Container>
        <Flex className={"gap-x-[40px]"}>
          <div className="w-[55%]">
            <div className="mb-[30px]">
              <p className="font-rubik font-medium text-[24px] text-[#EE5F38] leading-9">
                ABOUT ME
              </p>
              <h2 className="font-heebo font-bold text-[48px] text-white leading-14.5">
                I can design world for leading UI/UX & Web Dev
              </h2>
              <p className="font-rubik font-normal text-[17px] text-[#E2E8F0] leading-7 mt-4 text-justify">
                I am a professional Front-End Developer with a passion for
                creating intuitive and dynamic user experiences. I specialize in
                turning complex problems into simple, beautiful, and intuitive
                designs.My aim is to bring across your message and identity in
                the most creative way. I created web design for many famous
                brand companies.
              </p>
            </div>
            {/* <p className="font-rubik font-medium text-[24px] text-[#EE5F38] leading-9">
              PERSONAL INFOS:
            </p> */}
            {/* <div className="py-[18px] flex gap-x-[60px]">
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
            </div> */}
            <Button btnText={"Hire Me"} />
          </div>
          <div className="bg-[#212428] p-8 rounded-2xl border border-gray-800 w-[45%] transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.1)] overflow-hidden group hover:-translate-y-2 transition-transform">
            <h3 className="font-rubik font-medium text-[24px] text-white leading-9 mb-6 border-l-4 border-orange-500 pl-4 group-hover:text-orange-500 transition-colors duration-300">
              Personal Infos
            </h3>
            <div className="grid grid-cols-2 gap-y-6 gap-x-4">
              <InfoItem label="First Name" value="Shoumen" />
              <InfoItem label="Last Name" value="Shomu" />{" "}
              <InfoItem label="Address" value="Dhaka, Bangladesh" />
              <InfoItem label="Phone" value="+880 1755-933871" />
              <InfoItem label="Age" value="28 Years" />
              <InfoItem label="Email" value="shoumenshomu@gmail.com" />
              <InfoItem label="Nationality" value="Bangladeshi" />
              <InfoItem label="Whatsapp" value="+880 1755-933871" />
              <InfoItem label="Languages" value="Bangla, English" />
              <InfoItem label="Freelance" value="Available" />
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default AboutMe;
