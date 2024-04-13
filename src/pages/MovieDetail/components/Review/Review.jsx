import React from 'react'
import "./Review.style.css"

const Review = ({review}) => {
  return (
    <div>
      <h4 className='r-author'>{review.author}</h4>
      <p>{review.content}</p>
    </div>
  )
}

export default Review