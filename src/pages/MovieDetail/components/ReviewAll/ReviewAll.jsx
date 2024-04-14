import React, {useState} from 'react'
import { useParams } from 'react-router-dom';
import { useMovieReviewQuery } from '../../../../hooks/useMovieReview';
import { Alert, Container, Row, Col } from 'react-bootstrap';
import "./ReviewAll.style.css"

const ReviewAll = () => {
    const [close, setClose] = useState(false);
    const {id} = useParams();
    const {data, isLoading, isError, error} = useMovieReviewQuery({id})
    if(isLoading) {return <h1>Loading ...</h1>}
    if(isError) {return <Alert variant="danger">{error.message}</Alert>}
    console.log('rrr', data)

    const reviews = data.results.map((review,idx)=>
    <Container key={idx} className='reviewer'>
        <Row><h4>{review.author_details.username}</h4></Row>
        <Row><div className={`reviewer-box ${close ? 'more' : 'fold'}`}>{review.content}</div></Row>
        <button onClick={()=>setClose(!close)}>{review.content.length > 600 && (close ? "fold" : "more")}</button>
        <p style={{border: "1px solid white", marginTop: "2rem"}}></p>
    </Container>
    )

  return (
    <div style={{border: "1px solid white", margin: "4rem", marginTop: "2rem", padding: "3rem"}}>
      {reviews}
    </div>
  )
}

export default ReviewAll
