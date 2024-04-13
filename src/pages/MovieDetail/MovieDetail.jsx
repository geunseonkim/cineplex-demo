import React from 'react'
import { useMovieDetailQuery } from '../../hooks/useMovieDetail';
import { Alert, Container, Row, Col} from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import MovieDetailInfo from './components/MovieDetailInfo/MovieDetailInfo';
import MovieDetailCredits from './components/MovieDetailCredits/MovieDetailCredits';
import MovieDetailMoreInfo from './components/MovieDetailMoreInfo/MovieDetailMoreInfo';
import "./MovieDetail.style.css"


const MovieDetail = () => {
  const {id} = useParams();
  const {data: movie, isLoading, isError, error} = useMovieDetailQuery({id})
  if(isLoading) {return <h1>Loading ...</h1>}
  if(isError) {return <Alert variant="danger">{error.message}</Alert>}
  return (
    <div>
      <div className="detail-banner" style={{backgroundImage: "url(https://huddle.today/wp-content/uploads/2017/02/Discover_CORPSALES_994x342-e1503675682653.jpg)",}}></div>
      <MovieDetailInfo movie={movie} id={id}/> 
      <MovieDetailCredits id={id}/>   
      <MovieDetailMoreInfo id={id}/>
    </div>
  )
}

export default MovieDetail
