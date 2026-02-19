import React from "react";
import Container from "../Container";
import Button from "../Button";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import Flex from "../Flex";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactPart = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_78xroo9", "template_l4asv4e", form.current, {
        publicKey: "v0bYX7oFeLqMwuQ8M",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <div id="contact" className="bg-[#212428] border-b border-b-[#181A1D]">
      <div className="bg-[url(/src/assets/contact.png)] bg-cover bg-center bg-no-repeat pt-25 pb-7.5">
        <Container>
          <Flex className={"lg:gap-20 lg:flex-row flex-col"}>
            <div className="left w-full lg:pw-0">
              <div className="lg:text-left text-center">
                <p className="font-rubik font-medium text-[24px] text-[#EE5F38] leading-9 ">
                  CONTACT
                </p>
                <h2 className="font-heebo font-bold text-[48px] text-white leading-14.5">
                  Let’s Start Working Together!
                </h2>
                <p className="font-rubik font-normal text-[17px] text-[#E2E8F0] leading-7 mt-4 lg:text-justify text-center lg:w-122.5">
                  Ready to launch your project? Reach out to me anytime to
                  discuss your ideas and turn them into reality instantly.
                </p>
              </div>
              <div className="mt-13.75">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="space-x-6.5">
                    <input
                      className="lg:w-67.75 w-[46%] py-2.5 pl-3.75 bg-transparent border border-[#475569] rounded-lg text-[#b8a9a9] placeholder-[#b8a9a9]"
                      type="text"
                      placeholder="Your Name"
                    />
                    <input
                      className="lg:w-67.75 w-[46%] py-2.5 pl-3.75 bg-transparent border border-[#475569] rounded-lg text-[#b8a9a9] placeholder-[#b8a9a9]"
                      type="mail"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="mb-12">
                    <textarea
                      className="mt-7 py-2.5 pl-3.75 bg-transparent border border-[#475569] rounded-lg text-[#b8a9a9] placeholder-[#b8a9a9] w-full lg:w-[567px]"
                      rows="8"
                      name=""
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <Button btnText={"Send Request"} />
                </form>
              </div>
            </div>
            <div className="right space-y-12.5 pt-25">
              <div className="flex items-center gap-6">
                <div className="h-17.5 w-17.5 bg-[#EE5F38] rounded-[50%] flex justify-center items-center">
                  <FaPhoneAlt className="text-[25px] text-white" />
                </div>
                <div className="">
                  <p className="font-heebo font-bold text-[32px] text-white leading-12">
                    Call Me
                  </p>
                  <p className="font-rubik font-normal text-base text-white leading-6">
                    +8801755-933871
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="h-17.5 w-17.5 bg-[#EE5F38] rounded-[50%] flex justify-center items-center">
                  <MdOutlineEmail className="text-[25px] text-white" />
                </div>
                <div className="">
                  <p className="font-heebo font-bold text-[32px] text-white leading-12">
                    Email Me
                  </p>
                  <p className="font-rubik font-normal text-base text-white leading-6">
                    shoumenshomu@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="h-17.5 w-17.5 bg-[#EE5F38] rounded-[50%] flex justify-center items-center">
                  <FaMapMarkerAlt className="text-[25px] text-white" />
                </div>
                <div className="">
                  <p className="font-heebo font-bold text-[32px] text-white leading-12">
                    Address
                  </p>
                  <p className="font-rubik font-normal text-base text-white leading-6">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </Flex>
          <div className="mt-17.5 justify-center hidden lg:block">
            <map name="">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.83187894154!2d90.33728812288355!3d23.780975728197344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1770051810485!5m2!1sen!2sbd"
                width="1300"
                height="350"
              ></iframe>
            </map>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ContactPart;
