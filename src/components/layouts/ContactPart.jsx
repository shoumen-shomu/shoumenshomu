import React from "react";
import Container from "../Container";
import Button from "../Button";

const ContactPart = () => {
  return (
    <div>
      <div className="bg-[url(/src/assets/contact.png)] bg-cover bg-center bg-no-repeat pt-25 pb-81.25">
        <Container>
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
              <Button btnText={'Send Request'}/>
            </div>
          </div>
          <div className="right">
            
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ContactPart;
