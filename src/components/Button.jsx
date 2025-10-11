import React from 'react'

export default function Button({text,className}) {
  return (
    <button className={`text-white text-base sm:text-lg md:text-lg font-bold font-robo py-2 px-5 lg:py-4 lg:px-9 bg-secondary rounded  ${className}`}>{text}</button>
  )
}
