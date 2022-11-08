import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import { auth } from '../../firebase'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate()

  return (
    <Navbar
      // bg="primary"
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
          style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}
        >
          <lord-icon
            src="https://cdn.lordicon.com/pqxdilfs.json"
            trigger="boomerang"
            // style="width:250px;height:250px"
            style={{
              width: '50px',
              height: '50px',
              margin: '0px',
              padding: '0px',
            }}
          ></lord-icon>
          NewsBuddy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 d-flex justify-content-end"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/alannews">News Page</Nav.Link>
            <Nav.Link href="#action2">Bitcoin Page</Nav.Link>
          </Nav>

          <Button
            variant="danger"
            className="mb-1"
            onClick={() => {
              auth.signOut()
              navigate('/')
            }}
          >
            Logout
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
