import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import ServiveImageOne from '../assets/serviceImage1.png'
import ServiveImageTwo from '../assets/serviceImage2.png'
import ServiveImageThree from '../assets/serviceImage3.png'
import ServiveImagefour from '../assets/serviceImage4.png'
import ServiceCard from '../components/ServiceCard'

const Service = () => {
  return (
    <section className=' bg-[#F9F9FB] relative -z-20 pb-[100px]'>
      <Container>
       <Flex className='justify-between relative '>
            <div className='w-[230px] h-[200px] md:h-[300px] md:w-[270px] absolute top-[20px] md:-top-[20px] -z-10 -translate-x-1/2 md:translate-x-0 left-1/2 md:left-0'>
              <Image className='w-full h-full' src={ServiveImageOne}/>
            </div>
            <div className='w-[230px] h-[200px] md:h-[400px] md:w-[270px] absolute top-[240px] md:-top-[20px] -z-10 -translate-x-1/2 md:translate-x-0 left-1/2 md:left-[300px]'>
              <Image className='w-full h-full' src={ServiveImageTwo}/>
            </div>
            {/* <div className='w-[340px] absolute -top-[100px] -z-10 left-[530px]'>
              <Image className='w-full' src={ServiveImageThree}/>
            </div>
            <div className='w-[270px] absolute -top-[100px] -z-10 right-0'>
              <Image className='w-full' src={ServiveImagefour}/>
            </div> */}
       </Flex>

      <Flex className='flex-col items-center justify-center md:flex-row md:justify-between  mt-[500px]'>
         <ServiceCard title="53k" text="Happy client"/>
         <ServiceCard title="10k" text="Projects Done"/>
         <ServiceCard title="120" text="Gets Award"/>
         <ServiceCard title="16" className='after:bg-transparent' text="operated yEARS"/>
      </Flex>
       
          
      </Container>
    </section>
  )
}

export default Service