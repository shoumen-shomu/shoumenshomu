import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import { FaRegCircleDot } from "react-icons/fa6";
import Button from "../Button";
import InfoItem from "../InfoItem";
import { HashLink } from "react-router-hash-link";

const AboutMe = () => {
  return (
    <div id="about" className="py-25 bg-[#150a0a] border-b border-b-[#181A1D]">
      <Container>
        <Flex className={"gap-x-10 lg:flex-row flex-col"}>
          <div className="lg:w-[55%]">
            <div className="mb-7.5 text-center lg:text-left">
              <p className="font-rubik font-medium text-[24px]  text-[#C1272D] leading-9">
                ABOUT ME
              </p>
              <h2 className="font-heebo font-bold text-[48px]  text-[#D1D5DB] leading-14.5 ">
                I build modern sites with leading React & Web Tech.
              </h2>
              <p className="font-rubik font-normal text-[17px]  text-[#D1D5DB] leading-7 mt-4 lg:text-justify">
                I am a professional Front-End Developer with a passion for
                creating intuitive and dynamic user experiences. I specialize in
                turning complex problems into simple, beautiful, and intuitive
                designs. My aim is to bring across your message and identity in
                the most creative way. I created web design for many famous
                brand companies.
              </p>
            </div>
            <div className="text-left mb-5 lg:mb-0">
              <HashLink smooth to="#contact">
                <Button btnText={"Hire Me"} />
              </HashLink>
            </div>
          </div>
          <div className="bg-[#150a0a] lg:py-8 lg:px-8 py-8 px-5 rounded-2xl border border-[#C1272D]/30 lg:w-[45%] transition-all duration-300 shadow-[0_0_20px_rgba(193,39,45,0.1)] overflow-hidden group hover:-translate-y-2">
            <h3 className="font-rubik font-medium text-[24px] text-[#D1D5DB] leading-9 mb-6 border-l-4 border-[#C1272D] pl-4 group-hover:text-[#C1272D] transition-colors duration-300">
              Personal Infos
            </h3>
            <div className="grid grid-cols-2 gap-y-6 lg:gap-x-4">
              <InfoItem label="First Name" value="Shoumen" />
              <InfoItem label="Last Name" value="Shomu" />
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
