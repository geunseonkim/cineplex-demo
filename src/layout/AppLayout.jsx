import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, useNavigate } from 'react-router-dom';
import "./AppLayout.style.css"

const AppLayout = () => {
    const navigate = useNavigate();
    const goToHomepage = () => {
        navigate("/")
    }
    const goToMovies = () => {
        navigate("movies")
    }

    const [keyword, setKeyword] = useState('');
    const searchByKeyword = (event) => {
        event.preventDefault() // 페이지의 새로고침을 방지.
        // url 바꿔주기.
        navigate(`/movies?q=${keyword}`)
        setKeyword("");
    }

  return (
    <div>
        <Navbar expand="lg" style={{padding: "15px"}}>
        <Container fluid >
            <Navbar.Brand href="#"><img style={{width: "100px"}} src='https://beyondthespectrummovie.com/wp-content/uploads/2018/03/Cineplex_logo_sm_white.png'/></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" className='navbar-dark'/>
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link href="#action1" style={{color: "white"}} onClick={goToHomepage} className='banner-name'>Home</Nav.Link>
                <Nav.Link href="#action2" style={{color: "white"}} onClick={goToMovies} className='banner-name'>Movies</Nav.Link>  
            </Nav>
            <Form className="d-flex" onSubmit={searchByKeyword}>
                <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={keyword}
                onChange={(event)=>setKeyword(event.target.value)} // 엔터키 입력 o, 서치버튼 클릭 x => should figure out.
                />
                <Button variant="outline-light" className='banner-search'>Search</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    <Outlet/>
    </div>
  )
}

export default AppLayout
