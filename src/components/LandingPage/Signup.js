import React, { useState } from 'react'
import className from 'classnames'
import useStyles from './signupStyles'
import Button from 'react-bootstrap/Button'
import { Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import signupImg from '../../Images/signup.png'
import 'animate.css'
import { useNavigate, Link } from 'react-router-dom'
import { Alert, AlertTitle } from '@mui/material'
import { auth } from '../../firebase'
import Snackbar from '@mui/material/Snackbar'

const Signup = () => {
  const classes = useStyles()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [checkPass, setCheckPass] = useState(false)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      setCheckPass(true)
    } else {
      setCheckPass(false)
      try {
        await auth.createUserWithEmailAndPassword(email, confirmPassword)
        setOpen(true)
      } catch (err) {
        let firebaseMsg = err.message
        alert(firebaseMsg)
      }
    }
  }

  // For blank Spaces
  const isValidPassword = (pass) => {
    // Input has Space -> returns True else False
    let regex = pass.match(/^\s+$/) !== null
    return regex
  }

  // Disable Button
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
          <section className={classes.section + ' ' + 'signup_media'}>
            <div className={classes.rightSide + ' ' + 'right_side'}>
              <h3
                style={{ textAlign: 'center', color: '#00ABB3' }}
                className="animate__animated animate__pulse animate__infinite	signup_label"
              >
                Sign-Up Page !
              </h3>
              <hr />
              <Form onSubmit={handleSubmit}>
                <Form.Group
                  className="mb-2 signup_tf"
                  controlId="formBasicEmail"
                >
                  <Form.Label className={classes.label}>
                    Email address
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Form.Text className="text-muted">
                    <i>We'll never share your email with anyone else.</i>
                  </Form.Text>
                </Form.Group>

                <Form.Group
                  className="mb-2 signup_tf"
                  controlId="formBasicPassword"
                >
                  <Form.Label className={classes.label}>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3 signup_tf"
                  controlId="formBasicPassword"
                >
                  <Form.Label className={classes.label}>
                    Confirm Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </Form.Group>
                {(isValidPassword(password) ||
                  isValidPassword(confirmPassword)) && (
                  <Alert
                    severity="warning"
                    className="animate__animated animate__bounceIn"
                  >
                    <AlertTitle>Warning</AlertTitle>
                    Some Input field has — <strong>Blank Spaces!</strong>
                  </Alert>
                )}
                {/* Checking Password and Confirm password */}
                {checkPass && (
                  <Alert
                    severity="error"
                    className="animate__animated animate__bounceIn"
                  >
                    <AlertTitle>Error</AlertTitle>
                    Password and Confirm Password are
                    <strong> Different </strong> !
                  </Alert>
                )}

                <div className="d-grid gap-4">
                  <Button
                    className="mt-3 mb-3 signup_tf"
                    variant="success"
                    type="submit"
                    disabled={!validateForm()}
                  >
                    Sign-Up Now
                  </Button>
                </div>
                <div
                  style={{ display: 'flex', justifyContent: 'center' }}
                  class="login_link"
                >
                  <p style={{ color: 'gray' }}>
                    Already have an account? &nbsp;
                  </p>
                  <nav>
                    <Link to="/login">Log in</Link>{' '}
                  </nav>
                </div>
              </Form>
            </div>
            <div className={classes.leftSide}>
              <div className={classes.imgSection}>
                <img
                  src={signupImg}
                  className={classes.image}
                  alt="Sign Up Image"
                />
              </div>
            </div>
          </section>
        </div>
        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          message={`Sign Up Successful ${email}`}
          anchorOrigin={{
            horizontal: 'center',
            vertical: 'bottom',
          }}
        />
      </div>
    </>
  )
}

export default Signup
