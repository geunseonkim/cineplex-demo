import React from 'react'
import { Badge } from 'react-bootstrap'
import "./MovieCard.style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faFire } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { useMovieGenreQuery } from '../../hooks/useMovieGenre'

const MovieCard = ({movie}) => {

  const {data:genreData} = useMovieGenreQuery()
  // console.log("ggg", genreData);

  const showGenre = (genreIdList) => {
    if (!genreData) {return []}
    const genreNameList = genreIdList.map((id)=>{
      const genreObj = genreData.find((genre)=>genre.id === id)
      return genreObj.name;
    })

    return genreNameList
  }

  return (
    <div
    style={{backgroundImage: "url("+`https://themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`+")"}}
    className='movie-card'>
        <div className='overlay'>
            <h3>{movie.title}</h3>
            {showGenre(movie.genre_ids).map((id,idx)=>(<Badge style={{margin: "0.1rem"}} bg="light" text="dark" key={idx}>{id}</Badge>))}
            <div className='movie-card-info'>
                <div><FontAwesomeIcon icon={faStar} style={{color: "#FFDF00"}} /> {movie.vote_average}</div>
                <div><FontAwesomeIcon icon={faFire} style={{color: "red"}} /> {movie.popularity}</div>
                <div><FontAwesomeIcon icon={faCalendar} style={{color: "green"}} /> {movie.release_date}</div>
                <div>{movie.adult? "over 18" : "under 18"}</div>
            </div>
        </div>
    </div>
  )
}

export default MovieCard
