import React from 'react'

const List = ({text}) => {
  return (
    <>
    <li className='text-[#EFF4FA] text-lg font-semibold font-open hover:text-[#1BBF00] duration-75 cursor-pointer'>{text}</li>
    </>
  )
}

export default List