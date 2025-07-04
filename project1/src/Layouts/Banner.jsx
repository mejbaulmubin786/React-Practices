import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'
import Flex from '../components/Flex'

const Banner = () => {
  return (
    <section className='relative bg-banner bg-center bg-no-repeat bg-cover pt-[600px] pb-[105px] md:pb-[394px] w-full'>
        <div className='absolute top-0 left-0 bg-[#6b62c5e6]  w-full '>
            <Container>
                <div className='text-center mt-[224px] mb-[140px] md:mt-[250px] md:mb-[250px] px-3 md:px-0'>
                    <h1 className='text-[28px] md:text-[84px] text-[#FAFAFE] font-bold font-open'>You’re Unique.Your Website Should be too</h1>
                    <p className='md:w-[715px] leading-7 md:leading-10 mx-auto text-lg md:text-2xl text-[#E6E5F3] font-normal font-papri mb-6 pt-4 md:pt-0'>A beautiful website passionately crafted for your small business.  Our Digital Agency development has changed the way brands and businesses use technology for growing business. </p>
                   <Flex className='justify-center gap-x-5'>
                     <Button text="get free quoto"/>
                     <Button text="Learn More"/>
                   </Flex>
                </div>
            </Container>
        </div>

    </section>
  )
}

export default Banner