import React from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import one from '../assets/faces/one.png'
import two from '../assets/faces/two.jpg'
import three from '../assets/faces/three.jpg'

import foOne from '../assets/customer/one.png'
import foTwo from '../assets/customer/two.png'
import foThree from '../assets/customer/three.png'
import foFour from '../assets/customer/four.png'

const Customer = () => {
  return (
    <section className='bg-[#F9F9FB]'>
      <Container className='flex gap-x-[30px]'>

        <div className='ml-2 text-center mt-[28px] mx-auto'>
          <Image className="w-[270px] h-[350px] rounded-[20px]" src={foOne} />
        </div>
        <div className='ml-2 text-center mx-auto'>
          <Image className="w-[200px] h-[496px] rounded-[20px]" src={foTwo} />
        </div>
        <div className='text-center'>
          <div className='flex items-center justify-center'>
            <Image className='w-20 h-20 bg-[#F9F9FB] rounded-full -mr-8 p-[5px]' src={one} />
            <Image className='w-20 h-20 bg-[#F9F9FB] rounded-full -mr-8 p-[5px]' src={two} />
            <Image className='w-20 h-20 bg-[#F9F9FB] rounded-full p-[5px]' src={three} />
            <div className='ml-2 text-left'>
              <p className='text-[#F3F3F4] text-lg'>2000+</p>
              <p className='text-[#F3F3F4] text-lg'>Satisfied Customer</p>
            </div>
          </div>
          <div className='ml-2 text-center mx-auto mt-[26px]'>
            <Image className="w-[340px] h-[326px] rounded-[20px]" src={foThree} />
          </div>
        </div>
        <div className='ml-2 text-center mx-auto mt-6'>
          <Image className="w-[270px] h-[482px] rounded-[20px]" src={foFour} />
        </div>
      </Container>
    </section>
  )
}

export default Customer