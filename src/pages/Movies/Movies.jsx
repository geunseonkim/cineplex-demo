import React, { useState } from 'react'
import { useSearchMovieQuery } from '../../hooks/useSearchMovie'
import { useSearchParams } from 'react-router-dom'
import MovieCard from '../../common/MovieCard/MovieCard'
import { Alert, Container, Row, Col} from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import './Movies.style.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
  
  const handlePageClick = ({selected}) => {
    setPage(selected + 1);
  }

  const {data, isLoading, isError, error} = useSearchMovieQuery({keyword, page});
  if(isLoading) {return <h1>Loading ...</h1>}
  if(isError) {return <Alert variant="danger">{error.message}</Alert>}

  console.log("aaa", data);

  return (
    <Container style={{marginTop: "2rem"}}>
      <Row>
        <Col lg={4} xs={12}>
        
        <Form inline>
          <div className='genre-search-filter'>Category</div>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" style={{backgroundColor: "#BF40BF", borderColor: "white"}}>click</Button>
          </Col>
        </Row>
      </Form>




        </Col>
        <Col lg={8} xs={12}>
          <Row>
          {data?.results.map((movie,idx)=><Col key={idx} lg={4} xs={12} style={{marginBottom: "2rem"}}><MovieCard movie={movie}/></Col>)}
          </Row>
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
