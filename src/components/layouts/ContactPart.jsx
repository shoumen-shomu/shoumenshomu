import React from "react";
import Container from "../Container";
import Button from "../Button";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import Flex from "../Flex";
const ContactPart = () => {
  return (
    <div>
      <div className="bg-[url(/src/assets/contact.png)] bg-cover bg-center bg-no-repeat pt-25 pb-81.25">
        <Container>
          <Flex className={"gap-20"}>
            <div className="left">
              <p className="font-rubik font-medium text-[24px] text-[#EE5F38] leading-9">
                CONTACT
              </p>
              <h2 className="font-heebo font-bold text-[48px] text-white leading-14.5">
                Get I contact work
              </h2>
              <p className="font-rubik font-normal text-[17px] text-[#E2E8F0] leading-7 mt-4 text-justify w-[490px]">
                Promote your blog posts, case udie, and product ouncems with the
                the branded videoscustomers coming back for services Makes best
                effort.
              </p>
              <div className="mt-[55px]">
                <div className="space-x-[26px]">
                  <input
                    className="w-[271px] py-[10px] pl-[15px] bg-transparent border border-[#475569] rounded-lg text-[#b8a9a9] placeholder-[#b8a9a9]"
                    type="text"
                    placeholder="Your Name"
                  />
                  <input
                    className="w-[271px] py-[10px] pl-[15px] bg-transparent border border-[#475569] rounded-lg text-[#b8a9a9] placeholder-[#b8a9a9]"
                    type="mail"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-[48px]">
                  <textarea
                    className="mt-7 py-[10px] pl-[15px] bg-transparent border border-[#475569] rounded-lg text-[#b8a9a9] placeholder-[#b8a9a9] 
  "
                    rows="5"
                    cols="73"
                    name=""
                    placeholder="Message"
                  ></textarea>
                </div>
                <Button btnText={"Send Request"} />
              </div>
            </div>
            <div className="right space-y-[50px] pt-[100px]">
              <div className="flex items-center gap-6">
                <div className="h-[70px] w-[70px] bg-[#EE5F38] rounded-[50%] flex justify-center items-center">
                  <FaPhoneAlt className="text-[25px] text-white" />
                </div>
                <div className="">
                  <p className="font-heebo font-bold text-[32px] text-white leading-12">Call Me</p>
                  <p className="font-rubik font-normal text-base text-white leading-6">+8801755-933871</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="h-[70px] w-[70px] bg-[#EE5F38] rounded-[50%] flex justify-center items-center">
                  <MdOutlineEmail className="text-[25px] text-white" />
                </div>
                <div className="">
                  <p className="font-heebo font-bold text-[32px] text-white leading-12">Email Me</p>
                  <p className="font-rubik font-normal text-base text-white leading-6">shoumenshomu@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="h-[70px] w-[70px] bg-[#EE5F38] rounded-[50%] flex justify-center items-center">
                  <FaMapMarkerAlt className="text-[25px] text-white" />
                </div>
                <div className="">
                  <p className="font-heebo font-bold text-[32px] text-white leading-12">Address</p>
                  <p className="font-rubik font-normal text-base text-white leading-6">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </Flex>
        </Container>
      </div>
    </div>
  );
};

export default ContactPart;
