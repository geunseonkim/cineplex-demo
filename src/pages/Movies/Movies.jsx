import React, { useState, useEffect } from 'react'
import { useSearchMovieQuery } from '../../hooks/useSearchMovie'
import { useSearchParams } from 'react-router-dom'
import MovieCard from '../../common/MovieCard/MovieCard'
import { Alert, Container, Row, Col} from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import './Movies.style.css';
import Button from 'react-bootstrap/Button';
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';

// 2가지 경로.
// - navbar 를 통해. => popularMovie
// - keyword 입력을 통해. => keyword와 관련된 영화들.

// 페이지네이션 설치.
// page state.
// 페이지네이션 클릭할 때마다 페이지 바꾸기.
// 페이지 값이 바뀔 때마다 useSearchMovie에 page까지 넣어서 fetch.

const Movies = () => {
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1)
  const keyword = query.get("q");
  const {data:genreData} = useMovieGenreQuery()
  const [movieGenre, setMovieGenre] = useState([])

  const handlePageClick = ({selected}) => {
    setPage(selected + 1);
  }

  const sortByGenre = (genreId) => {
    const genreList = data.results.filter((movie)=>(movie.genre_ids.includes(genreId)))
    console.log("movie-ggg", genreList);
    setMovieGenre(genreList)
  }
  const genreIdList = [28, 12, 16, 35, 80, 99, 18, 10751, 14, 36, 27, 10402, 9648, 10749, 878, 10770, 53, 10752, 37]

  const {data, isLoading, isError, error} = useSearchMovieQuery({keyword, page});

  const dataHandlePopular = () => {
    const handlePopularResult = data.results.sort((a, b)=> a.vote_average - b.vote_average)
    console.log("ppp", handlePopularResult);
    setMovieGenre(handlePopularResult);
  }

  const dataHandleLatest = () => {
    const handleLatestResult = data.results.sort((a, b)=> a.release_date - b.release_date)
    console.log("lll", handleLatestResult); 
    setMovieGenre(handleLatestResult);
  }
    useEffect(()=>{},[movieGenre])

  if(isLoading) {return <h1>Loading ...</h1>}
  if(isError) {return <Alert variant="danger">{error.message}</Alert>}

  console.log("aaa", data);

  const handlePopular = () => {
    const value = "Most Popular Movies"
    switch (value) {
      case "Most Popular Movies" :
        return dataHandlePopular();
      default:
    }
  }
  const handleLatest = () => {
    const value = "The Latest Movies"
    switch (value) {
      case "The Latest Movies" :
        return dataHandleLatest();
      default:
    }
  }

  return (
    <Container style={{marginTop: "2.5rem"}}>
      <Row>
        <Col lg={4} xs={12}>
        <h4 className='category-name'>More to explore</h4>
          <Button variant="outline-light" className='category-button-name' onClick={()=>handlePopular()}>Most Popular Movies</Button>
          <Button variant="outline-light" className='category-button-name' onClick={()=>handleLatest()}>The Latest Movies</Button>

          <h4 className='category-name'>Top Rated Movies by Genre &#62;</h4>
          <div>
            {genreIdList.map((genreId, idx)=><Button key={idx} onClick={()=>sortByGenre(genreId)} variant="outline-light" className='movie-genreList'>
              {genreData.find((genre)=>(genre.id === genreId)).name}</Button>)}</div>
        </Col>


        <Col lg={8} xs={12}>
          <Row className='movie-list'>
          {(movieGenre.length !== 0)? movieGenre.map((movie,idx)=><Col key={idx} lg={4} xs={12} style={{marginBottom: "2rem"}}><MovieCard movie={movie}/></Col>)
         : data.results.map((movie, idx)=><Col key={idx} lg={4} xs={12} style={{marginBottom: "2rem"}}><MovieCard movie={movie}/></Col>) }
          </Row>

         {/* pagination */}
          <ReactPaginate
            previousLabel="&#60;"
            nextLabel="&#62;"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            pageCount={12} // 전체 페이지가 몇 개인지 알려준다.
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName="pagination"
            activeClassName="active"
            forcePage={page-1} // 리액트 페이지네이션은 페이지를 0부터 카운트한다.
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Movies
