import React from 'react'

const List = ({text,className}) => {
  return (
    <li className={`text-[#EFF4FA] text-lg font-semibold	font-open hover:text-[#1BBF00] duration-300 cursor-pointer list-none ${className}`}>{text}</li>
  )
}

export default List