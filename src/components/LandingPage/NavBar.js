import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
// import Button from 'react-bootstrap/Button'
import { Button } from 'react-bootstrap'
import { auth } from '../../firebase'
import { useNavigate } from 'react-router-dom'
import Banner from '../LandingPage/Banner'

const NavBar = () => {
  const navigate = useNavigate()

  return (
    <Navbar
      variant="dark"
      expand="lg"
      style={{
        fontWeight: 'bold',
        padding: '0',
        backgroundColor: '#277BC0',
        color: 'white',
      }}
    >
      <Container fluid>
        <Navbar.Brand
          href="/banner"
          style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}
        >
          <lord-icon
            src="https://cdn.lordicon.com/pqxdilfs.json"
            trigger="boomerang"
            style={{
              width: '60px',
              height: '60px',
              // margin: '0px !important',
              // padding: '0px !important',
            }}
          ></lord-icon>
          NewsBuddy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px', fontSize: '15px' }}
            navbarScroll
          >
            <Nav.Link href="/alannews" className="pl-3">
              News Page
            </Nav.Link>
            <Nav.Link href="/bitcoindata">Bitcoin Page</Nav.Link>
            <Nav.Link href="/aboutus">About Page</Nav.Link>
          </Nav>

          <Button
            variant="danger"
            className="mb-2 mt-2"
            onClick={() => {
              auth.signOut()
              navigate('/')
            }}
          >
            Logout
          </Button>
          {/* <Button variant="outline-success">Search</Button> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
