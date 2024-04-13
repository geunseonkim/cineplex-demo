import React, { useState } from 'react'
import {Button} from 'react-bootstrap';
import RelatedMovies from '../RelatedMovies/RelatedMovies';
import { useRelatedMoviesQuery } from '../../../../hooks/useRelatedMovies';
import { useMovieReviewQuery } from '../../../../hooks/useMovieReview';
import ReviewBox from '../Reviewbox/ReviewBox';
import "./MovieDetailMoreInfo.style.css"

const MovieDetailMoreInfo = ({id}) => {
    const [activeKey, setActiveKey] = useState(true);
    const {data: review} = useMovieReviewQuery({id})
    // console.log(",,,", review);
    const {data: relatedMovies} = useRelatedMoviesQuery({id})

  return (
    <div>
      <Button variant="outline-light" className='review-button' onClick={()=>setActiveKey(!activeKey)}>REVIEW</Button>
      <Button variant="outline-light" className='review-button' style={{marginLeft: "1rem"}} onClick={()=>setActiveKey(!activeKey)}>RELATED MOVIES</Button>
      <div>{activeKey? <ReviewBox review={review}/> : <RelatedMovies relatedMovies={relatedMovies}/>}</div>
    </div>

  )
}

export default MovieDetailMoreInfo
