import React, { useState } from 'react'
import className from 'classnames'
import useStyles from './loginStyles.js'
import Button from 'react-bootstrap/Button'
import { Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import loginImg from '../../Images/login2.png'
import 'animate.css'
import { Link, useNavigate } from 'react-router-dom'
import { Alert, AlertTitle } from '@mui/material'
import { auth } from '../../firebase'
import Snackbar from '@mui/material/Snackbar'

const Login = () => {
  const classes = useStyles()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (isValidPassword(password)) {
      return true
    } else {
      try {
        await auth.signInWithEmailAndPassword(email, password)
        setOpen(true)
      } catch (err) {
        let firebaseMsg = err.message
        alert(firebaseMsg)
      }
    }
  }

  const isValidPassword = (pass) => {
    // Input has Space -> returns True else False
    let regex = pass.match(/^\s+$/) !== null
    return regex
  }

  const validateForm = () => {
    return email.length > 0 && password.length > 0
  }

  const handleClose = () => {
    setOpen(false)
    navigate('/alannews')
  }

  return (
    <>
      <div className={classes.container}>
        <div className="animate__animated animate__flipInX">
          <section className={classes.section}>
            <div className={classes.leftSide}>
              <div className={classes.imgSection}>
                <img
                  src={loginImg}
                  className={classes.image}
                  alt="Login Image"
                />
              </div>
            </div>
            <div className={classes.rightSide}>
              <h3
                style={{ textAlign: 'center', color: '#2192FF' }}
                className="animate__animated animate__pulse animate__infinite	"
              >
                Login Page
              </h3>
              <hr />
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className={classes.label}>
                    Email address
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className={classes.label}>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                {isValidPassword(password) && (
                  <Alert
                    severity="error"
                    className="animate__animated animate__bounceIn"
                  >
                    <AlertTitle>Error</AlertTitle>
                    Given Input field has — <strong>Blank Spaces!</strong>
                  </Alert>
                )}
                <div className="d-grid gap-4">
                  <Button
                    className="mt-3 mb-3"
                    variant="primary"
                    type="submit"
                    disabled={!validateForm()}
                  >
                    Login Now
                  </Button>
                </div>
                <div style={{ display: 'flex', justifyContent: 'end' }}>
                  <p style={{ color: 'gray' }}>Don't have an account? &nbsp;</p>
                  <nav>
                    <Link to="/signup">Sign up</Link>{' '}
                  </nav>
                </div>
              </Form>
            </div>
          </section>
        </div>
        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          message={`Login Successful for ${email}`}
          anchorOrigin={{
            horizontal: 'center',
            vertical: 'bottom',
          }}
        />
      </div>
    </>
  )
}

export default Login
