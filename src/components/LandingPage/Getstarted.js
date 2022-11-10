import React from 'react'
import { Link } from 'react-router-dom'

const getstarted = () => {
  return (
    <div>
      <strong>Get Started page</strong>
      <nav>
        <Link to="/login">Login Page</Link> <br />
        <Link to="/signup">Signup Page</Link> <br />
        <Link to="/alannews">News Page</Link> <br />
        <Link to="/bitcoindata">Bitcoin Page</Link> <br />
        <Link to="/aboutus">About Page</Link>
      </nav>
    </div>
  )
}

export default getstarted
