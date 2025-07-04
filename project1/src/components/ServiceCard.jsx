import React from 'react'

const ServiceCard = ({title,text,className}) => {
  return (
    <div className={`relative md:after:w-[3px] after:h-[140px] after:bg-[#4F585F] after:absolute after:top-[22px] after:-right-[35px] after:content-[""] ${className}`}>
          <h2 className='text-primary text-3xl md:text-[64px] font-extrabold font-open'>{title}</h2>
          <h5 className='text-third text-base md:text-[34px] font-bold font-open pt-6'>{text}</h5>
     </div>
  )
}

export default ServiceCard