import React from "react";
import Container from "../Container";
import { FaStar } from "react-icons/fa";
import Images from "../Images";
import alamin from "../../assets/alamin.jpg";
import majharul from "../../assets/sijan.jpg";
import nabil from "../../assets/nabil.jpg";
import rafi from "../../assets/rafi.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const Testimonials = () => {
  return (
    <div className="py-25 bg-[#212428] border-b border-b-[#181A1D]">
      <Container>
        <div className="relative">
          <div className="text-center">
            <p className="font-rubik font-medium text-[24px] text-[#EE5F38] leading-9">
              TESTIMONIALS
            </p>
            <h2 className="font-heebo font-bold text-[48px] text-white leading-14.5">
              We are people say me
            </h2>
          </div>
          <ImQuotesLeft
            className={
              "text-[180px] text-[#EE5F38] absolute bottom-40 -left-40 opacity-30"
            }
          />
          <ImQuotesRight
            className={
              "text-[180px] text-[#EE5F38] absolute bottom-40 -right-40 opacity-30"
            }
          />
          <div className="mt-14 w-182.5 mx-auto">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              
              style={{
                "--swiper-pagination-color": "#EE5F38",
                "--swiper-pagination-bullet-inactive-color": "#999999",
                paddingBottom: "40px",
              }}
            >
              {/* Review one */}
              <SwiperSlide>
                <div className="">
                  <div className="flex gap-x-[5px] justify-center mb-5">
                    <FaStar className="text-base text-[#FFCE31]" />
                    <FaStar className="text-base text-[#FFCE31]" />
                    <FaStar className="text-base text-[#FFCE31]" />
                    <FaStar className="text-base text-[#FFCE31]" />
                    <FaStar className="text-base text-[#FFCE31]" />
                  </div>
                  <p className="font-rubik font-light text-[24px] text-[#E2E8F0] leading-8 italic text-center w-182.5 mx-auto mb-5">
                    "Shoumen built a powerful full-stack website. The backend
                    integration was seamless, and the React frontend looks
                    amazing. Highly skilled full-stack developer!"
                  </p>
                  <div className="flex justify-center mb-6.25">
                    <Images
                      className={"w-32.5 h-32.5 rounded-[50%] "}
                      imgSrc={alamin}
                    />
                  </div>
                  <p className="font-rubik font-bold text-[24px] text-white leading-8 text-center">
                    Md Al-Amin
                  </p>
                  <p className="font-rubik font-normal text-base text-[#F1F5F9] leading-6 text-center mb-4.5">
                    Mern Stack Developer
                  </p>
                </div>
              </SwiperSlide>
              {/* Review one */}

              {/* Review Two */}
              <SwiperSlide>
                <div className="">
                  <div className="flex gap-x-1.25 justify-center mb-5">
                    <FaStar className="text-base text-[#FFCE31]" />
                    <FaStar className="text-base text-[#FFCE31]" />
                    <FaStar className="text-base text-[#FFCE31]" />
                    <FaStar className="text-base text-[#FFCE31]" />
                    <FaStar className="text-base text-[#FFCE31]" />
                  </div>
                  <p className="font-rubik font-light text-[24px] text-[#E2E8F0] leading-8 italic text-center w-182.5 mx-auto mb-[20px]">
                    "Incredible full-stack skills! He handled everything from
                    the database to the UI with expertise. The application is
                    fast, secure, and bug-free."
                  </p>
                  <div className="flex justify-center mb-6.25">
                    <Images
                      className={"w-32.5 h-32.5 rounded-[50%] "}
                      imgSrc={majharul}
                    />
                  </div>
                  <p className="font-rubik font-bold text-[24px] text-white leading-8 text-center">
                    Mr.Sijan
                  </p>
                  <p className="font-rubik font-normal text-base text-[#F1F5F9] leading-6 text-center mb-[18px]">
                    TechFlow Systems
                  </p>
                </div>
              </SwiperSlide>
              {/* Review Two */}

              {/* Review Three */}
              <SwiperSlide>
                <div className="">
                  <div className="flex gap-x-[5px] justify-center mb-5">
                    <FaStar className="text-base text-[#FFCE31]" />
                    <FaStar className="text-base text-[#FFCE31]" />
                    <FaStar className="text-base text-[#FFCE31]" />
                    <FaStar className="text-base text-[#FFCE31]" />
                    <FaStar className="text-base text-[#FFCE31]" />
                  </div>
                  <p className="font-rubik font-light text-[24px] text-[#E2E8F0] leading-8 italic text-center w-182.5 mx-auto mb-[20px]">
                    "I am amazed by the quality. A true full-stack expert who
                    understands the entire development lifecycle. Highly
                    recommend for complex projects."
                  </p>
                  <div className="flex justify-center mb-6.25">
                    <Images
                      className={"w-32.5 h-32.5 rounded-[50%] "}
                      imgSrc={nabil}
                    />
                  </div>
                  <p className="font-rubik font-bold text-[24px] text-white leading-8 text-center">
                    Nabil Muntasir
                  </p>
                  <p className="font-rubik font-normal text-base text-[#F1F5F9] leading-6 text-center mb-[18px]">
                    NovaStack Solutions
                  </p>
                </div>
              </SwiperSlide>
              {/* Review Three */}

              {/* Review Four */}
              <SwiperSlide>
                <div className="">
                  <div className="flex gap-x-[5px] justify-center mb-5">
                    <FaStar className="text-base text-[#FFCE31]" />
                    <FaStar className="text-base text-[#FFCE31]" />
                    <FaStar className="text-base text-[#FFCE31]" />
                    <FaStar className="text-base text-[#FFCE31]" />
                    <FaStar className="text-base text-[#FFCE31]" />
                  </div>
                  <p className="font-rubik font-light text-[24px] text-[#E2E8F0] leading-8 italic text-center w-182.5 mx-auto mb-[20px]">
                    "Professional and efficient. He delivered a complete web
                    solution perfectly. His mastery of both front-end and
                    back-end technologies is impressive."
                  </p>
                  <div className="flex justify-center mb-6.25">
                    <Images
                      className={"w-32.5 h-32.5 rounded-[50%] "}
                      imgSrc={rafi}
                    />
                  </div>
                  <p className="font-rubik font-bold text-[24px] text-white leading-8 text-center">
                    Mesbaul Haque
                  </p>
                  <p className="font-rubik font-normal text-base text-[#F1F5F9] leading-6 text-center mb-[18px]">
                    DevPoint IO
                  </p>
                </div>
              </SwiperSlide>
              {/* Review Four */}
            </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
