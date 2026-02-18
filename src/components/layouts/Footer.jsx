import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className="bg-[url(/src/assets/footerbg.png)] bg-cover bg-center bg-no-repeat py-[50px]">
      <Container>
        <Flex className={"lg:justify-between items-center flex-col"}>
          <div className="mb-4 lg:mb-0">
            <p className='font-rubik font-normal text-base text-white leading-6'>All Rights Reserved By <span className='text-[#EE5F38]'>Shoumen Shomu</span> © 2026</p>
          </div>
          <div className="flex gap-x-8">
            <Link><p className='font-rubik font-normal lg:text-[20px] text-base text-[#E2E8F0] leading-6'>Terms & Condition</p></Link>
             <Link><p className='font-rubik font-normal lg:text-[20px] text-base text-[#E2E8F0] leading-6'>Privacy Policy</p></Link>
          </div>
        </Flex>
      </Container>
      </div>
    </div>
  )
}

export default Footer