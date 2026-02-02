import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className="bg-[url(/src/assets/footerbg.png)] bg-cover bg-center bg-no-repeat py-[50px]">
      <Container>
        <Flex className={"justify-between items-center"}>
          <div className="">
            <p className='font-rubik font-normal text-base text-white leading-[24px]'>All Rights Reserved By <span className='text-[#EE5F38]'>Shoumen Shomu</span> © 2026</p>
          </div>
          <div className="flex gap-x-[32px]">
            <Link><p className='font-rubik font-normal text-[20px] text-[#E2E8F0] leading-[24px]'>Terms & Condition</p></Link>
             <Link><p className='font-rubik font-normal text-[20px] text-[#E2E8F0] leading-[24px]'>Privacy Policy</p></Link>
          </div>
        </Flex>
      </Container>
      </div>
    </div>
  )
}

export default Footer