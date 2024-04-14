import React from 'react'
import { Badge, Container, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faFire } from '@fortawesome/free-solid-svg-icons'
// import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import "./MovieDetailInfo.style.css"
import {Button} from 'react-bootstrap';

const MovieDetailInfo = ({movie, id}) => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={6}>
          <img style={{width: "100%"}} src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`} /> 
          </Col>

          <Col lg={6}>
          <div>
            <div className='detail-page-genre'>{movie?.genres.map((id,idx)=>(<Badge style={{margin: "0.1rem"}} bg="light" text="dark" key={idx}>{id.name}</Badge>))}</div>
              <h1 style={{marginTop: "1rem"}}>{movie?.title}</h1>
              <div className='movie-card-info'>
                  <span><FontAwesomeIcon icon={faStar} style={{color: "#FFDF00"}} /> {movie?.vote_average} </span>
                  <span><FontAwesomeIcon icon={faFire} style={{color: "red"}} /> {movie?.popularity}</span>
                  <span className='card-detail-adult'>{movie?.adult? "over 18" : "under 18"}</span>
                  <p style={{border: "1px solid black", borderColor: "white"}}></p>
                  <p>{movie?.overview}</p>
            </div> 
            <p style={{border: "1px solid black", borderColor: "white"}}></p>

            <div>
              <div className='movie-detail-info-all'>
                <span><Button>Budget</Button></span>
                <span className='movie-detail-info'>USD {movie?.budget}</span>
              </div>
              <div className='movie-detail-info-all'>
                <span><Button>Revenue</Button></span>
                <span className='movie-detail-info'>USD {movie?.revenue}</span>
              </div>
              <div className='movie-detail-info-all'>
                <span><Button>Release Date</Button></span>
                <span className='movie-detail-info'>{movie?.release_date}</span>
              </div>
              <div className='movie-detail-info-all'>
                <span><Button>Run Time</Button></span>
                <span className='movie-detail-info'>{movie?.runtime}분</span>
              </div>
            </div>
            <p style={{border: "1px solid black", borderColor: "white"}}></p>
          </div>
          <Button className='trailer-button'>Trailer</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MovieDetailInfo
