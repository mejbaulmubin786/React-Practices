import React from 'react'

const Card = ({design, title, text, buttonText, type}) => {
  return (
    <>
    <div className={design}>
      <h2>{title}</h2>
      <p>{text}</p>
      {type?<button>{buttonText}</button>:''}
      
    </div>
    </>
  )
}

export default Card