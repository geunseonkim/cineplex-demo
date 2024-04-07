import React from 'react'
import './NotFound.style.css'

const NotFound = () => {
  return (
    <div>
      <div>
        <img alt="" style={{width: "100vw", marginTop: "80px", opacity: "0.9"}} src='https://curiocity.com/wp-content/uploads/2024/01/Cineplex-Popcorn-Bag-Fill-Billingual.jpg'/>
      </div>
      <div className='NotFound-num'>404</div>
      <div className='NotFound-explain'>Oops! Lost in popcorns.</div>
    </div>
  )
}

export default NotFound