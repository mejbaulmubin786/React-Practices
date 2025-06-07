import React from 'react'

const Card = ({title, text, design, type}) => {
  
  return (
    <>
      <div className={design} style={{ width: '18rem' }}> {/* এখানে className এবং style ঠিক করা হয়েছে */}
        <img src="..." className="card-img-top" alt="..." /> {/* img ট্যাগে self-closing স্ল্যাশ যোগ করা হয়েছে */}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          {
            type ? 
          }
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </>
  )
}

export default Card