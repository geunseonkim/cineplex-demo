import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import Alert from 'react-bootstrap/Alert'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from '../MovieCard/MovieCard';
import "./PopularMovieSlide.style.css"

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  };

const PopularMovieSlide = () => {
    const {data, isLoading, isError, error} = usePopularMoviesQuery()
    if(isLoading) {return <h1>Loading ...</h1>}
    if(isError) {return <Alert variant="danger">{error.message}</Alert>}
  return (
    <div>
      <h3 className='popularMovie-title'>Popular Movies</h3>
      <Carousel
        infinite={true}
        centerMode={true}
        itemClass='movie-slider p-1'
        containerClass='carousel-container'
        responsive={responsive}
        >
        {data.results.map((movie,idx)=>(<MovieCard movie={movie} key={idx}/>))}
      </Carousel>
    </div>
  )
}

export default PopularMovieSlide
