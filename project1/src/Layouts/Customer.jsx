import React from 'react'
import Image from '../components/Image'
import one from '../assets/faces/one.png'
import two from '../assets/faces/two.jpg'
import three from '../assets/faces/three.jpg'

const Customer = () => {
  return (
    <div className='flex items-center justify-center'>
      <Image className='w-20 h-20 bg-[#F9F9FB] rounded-full -mr-8 p-[5px]' src={one}/>
      <Image className='w-20 h-20 bg-[#F9F9FB] rounded-full -mr-8 p-[5px]' src={two}/>
      <Image className='w-20 h-20 bg-[#F9F9FB] rounded-full p-[5px]' src={three}/>
      <div>
        <p className='text-[#F3F3F4] text-lg'>2000+</p>
        <p className='text-[#F3F3F4] text-lg'>Satisfied Customer</p>
      </div>
    </div>
  )
}

export default Customer