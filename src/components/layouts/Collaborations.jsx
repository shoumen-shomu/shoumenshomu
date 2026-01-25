import React from "react";
import Container from "../Container";
import Images from "../Images";
import Flex from "../Flex";
import colone from '/src/assets/p1.png'
import coltwo from '/src/assets/p3.png'
import colthree from '/src/assets/p2.png'
import colfour from '/src/assets/p4.png'
import colfive from '/src/assets/p5.png'
import colsix from '/src/assets/p6.png'
import colseven from '/src/assets/p7.png'
import coleight from '/src/assets/p8.png'

const Collaborations = () => {
  return (
    <div className="py-25 bg-[#212428] border-b border-b-[#181A1D]">
      <Container>
        <div className="">
          <div className="border-b border-[#DDDDDD]">
            <Flex className={"justify-between "}>
                <div className="py-[40px] px-[77px] border-r border-[#181A1D]">
                    <Images className={'logo-gray duration-500 bg-transparent '} imgSrc={colone}/>
                </div>
                <div className="py-[40px] px-[77px] border-r border-[#181A1D]">
                    <Images className={'logo-gray duration-500 bg-transparent'} imgSrc={coltwo}/>
                </div>
                <div className="py-[40px] px-[77px] border-r border-[#181A1D]">
                    <Images className={'logo-gray duration-500 bg-transparent'} imgSrc={colthree}/>
                </div>
                <div className="py-[40px] px-[77px]">
                    <Images className={'logo-gray duration-500 bg-transparent'} imgSrc={colfour}/>
                </div>
            </Flex>
          </div>
          <div className="">
            <Flex className={"justify-between "}>
                <div className="py-[40px] px-[77px] border-r border-[#181A1D]">
                    <Images className={'logo-gray duration-500 bg-transparent '} imgSrc={colfive}/>
                </div>
                <div className="py-[40px] px-[77px] border-r border-[#181A1D]">
                    <Images className={'logo-gray duration-500 bg-transparent'} imgSrc={colsix}/>
                </div>
                <div className="py-[40px] px-[77px] border-r border-[#181A1D]">
                    <Images className={'logo-gray duration-500 bg-transparent'} imgSrc={colseven}/>
                </div>
                <div className="py-[40px] px-[77px]">
                    <Images className={'logo-gray duration-500 bg-transparent'} imgSrc={coleight}/>
                </div>
            </Flex>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Collaborations;
