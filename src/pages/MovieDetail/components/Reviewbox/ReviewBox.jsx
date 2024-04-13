import React from 'react'
import Review from '../Review/Review'
import {Row, Col} from 'react-bootstrap'

const ReviewBox = ({review}) => {
  return (
    <div style={{marginLeft: "5rem", marginBottom: "2rem", color: "red"}}>
      {/* {review?.map((item,idx)=><Col key={idx}><Review review={item}/></Col>)} */}
      review.map is not a function. TypeError: review.map is not a function.
    </div>
  )
}

export default ReviewBox
