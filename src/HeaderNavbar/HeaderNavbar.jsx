import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function HeaderNavbar() {
  // const color = "text-white text-h1 font-medium font-sans";
  return (
    <>
      <Navbar expand="lg" className="">
        <Container fluid className='py-4'>
          <Navbar.Brand to="/Movies"><img src="https://cloud.watch4.com/uploads/wedotv-12_logo.png" className='w-56 items-center' alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto ms-10  my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link to="/" className='text-white hover:bg-red-800 hover:rounded-lg focus:bg-red-800 focus:rounded-lg font-semibold text-3xl px-3 py-2' style={{ textDecoration: "none" }}>Home</Link>
              <Link to="/Movies" className='text-white hover:bg-red-800 hover:rounded-lg focus:bg-red-800 focus:rounded-lg font-semibold text-3xl px-3 py-2' style={{ textDecoration: "none" }}>Movies</Link>
              <Link to="/Series" className='text-white hover:bg-red-800 hover:rounded-lg focus:bg-red-800 focus:rounded-lg font-semibold text-3xl px-3 py-2' style={{ textDecoration: "none" }}>Series</Link>
              <Link to="/Sport" className='text-white hover:bg-red-800 hover:rounded-lg focus:bg-red-800 focus:rounded-lg font-semibold text-3xl px-3 py-2' style={{ textDecoration: "none" }}>Sports</Link>
              <Link to="/" className='text-white hover:bg-red-800 hover:rounded-lg focus:bg-red-800 focus:rounded-lg font-semibold text-3xl px-3 py-2' style={{ textDecoration: "none" }}>Live</Link>
              <Link to="/Privacy" className='text-white hover:bg-red-800 hover:rounded-lg focus:bg-red-800 focus:rounded-lg font-semibold text-3xl px-3 py-2' style={{ textDecoration: "none" }}>Privacy</Link>
              <Link to="/Terms" className='text-white hover:bg-red-800 hover:rounded-lg focus:bg-red-800 focus:rounded-lg font-semibold text-3xl px-3 py-2' style={{ textDecoration: "none" }}>Teams</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default HeaderNavbar;
