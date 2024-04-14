import React, { useState } from 'react'
import {Alert, Button} from 'react-bootstrap';
import { useMovieReviewQuery } from '../../../../hooks/useMovieReview';
import "./MovieDetailMoreInfo.style.css"
import ReviewAll from '../ReviewAll/ReviewAll';
// import RelatedMovies from '../RelatedMovies/RelatedMovies';
// import { useRelatedMoviesQuery } from '../../../../hooks/useRelatedMovies';


const MovieDetailMoreInfo = () => {
    const [activeKey, setActiveKey] = useState(true);

  return (
    <div>
      <Button variant="outline-light" className='review-button' onClick={()=>setActiveKey(!activeKey)}>REVIEW</Button>
      <Button variant="outline-light" className='review-button' style={{marginLeft: "1rem"}} onClick={()=>setActiveKey(!activeKey)}>RELATED MOVIES</Button>
      <div>{activeKey? <ReviewAll/> : "<RelatedMovies/> "}</div>
    </div>

  )
}

export default MovieDetailMoreInfo


// import React, { useState } from 'react'
// import { useParams } from 'react-router-dom';
// import { useMovieReviewQuery } from '../../../../hooks/useMovieReview';
// import { Alert, Button } from 'react-bootstrap';
// import ReviewBox from '../MovieDetailMoreInfo/components/ReviewBox'

// const MovieDetailMoreInfo = () => {
//   const [activeKey, setActiveKey] = useState(true);
//   const {id} = useParams();
//   const {data, isLoading, isError, error} = useMovieReviewQuery(id)
//   if(isLoading) {return <h1>Loading ...</h1>}
//   if(isError) {return <Alert variant="danger">{error.message}</Alert>}

//   console.log("rrr", data);
//   return (
//     <div>
//       <Button variant="outline-light" className='review-button' onClick={()=>setActiveKey(!activeKey)}>REVIEW</Button>
//       <Button variant="outline-light" className='review-button' style={{marginLeft: "1rem"}} onClick={()=>setActiveKey(!activeKey)}>RELATED MOVIES</Button>
//       <div>{activeKey? <ReviewBox/> : "관련 영화"}</div>
//     </div>
//   )
// }

// export default MovieDetailMoreInfo
