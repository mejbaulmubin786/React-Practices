import React from 'react'

const Button = ({text, className}) => {
  return (
    <button className={`py-[14px] px-7 bg-primary rounded-[100px] text-lg text-white font-semibold font-open border-2 border-transparent hover:bg-transparent hover:border-primary duration-300 ${className}`}>{text}</button>
  )
}

export default Button