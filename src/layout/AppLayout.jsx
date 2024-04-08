import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, useNavigate } from 'react-router-dom';

const AppLayout = () => {
    const navigate = useNavigate();
    const goToHomepage = () => {
        navigate("/")
    }
    const goToMovies = () => {
        navigate("movies")
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
                <Nav.Link href="#action1" style={{color: "white"}} onClick={goToHomepage}>Home</Nav.Link>
                <Nav.Link href="#action2" style={{color: "white"}} onClick={goToMovies}>Movies</Nav.Link>  
            </Nav>
            <Form className="d-flex">
                <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-light">Search</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    <Outlet/>
    </div>
  )
}

export default AppLayout
