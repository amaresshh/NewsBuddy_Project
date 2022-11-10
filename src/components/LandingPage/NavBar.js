import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
// import NavbarLogo from '../../Images/navBarLogo.png'
import { Button } from 'react-bootstrap'
import { auth } from '../../firebase'
import { useNavigate } from 'react-router-dom'
import NewsLogo from '../../Images/NewsLogo.png'
// import Banner from '../LandingPage/Banner'

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
          href="/"
          style={{
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            fontSize: '25px',
          }}
        >
          <img
            src={NewsLogo}
            alt="logo"
            style={{ height: '50px', width: '50px', margin: '5px' }}
          />
          NewsBuddy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px', fontSize: '20px' }}
            navbarScroll
          >
            <Nav.Link href="/alannews" className="pl-3">
              News Page
            </Nav.Link>
            <Nav.Link href="/bitcoindata">Bitcoin Page</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
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
