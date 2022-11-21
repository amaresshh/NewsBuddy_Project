import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import contactImg from '../../assets/img/contact-img.svg'
import 'animate.css'
import TrackVisibility from 'react-on-screen'
import NavBar from '../LandingPage/NavBar'
import './Contact.css'
import { v4 as uuid } from 'uuid'
import { db } from '../../firebase'

const Contact = () => {
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    db.collection('contact-data')
      .add({
        id: uuid(),
        firsName: fname,
        lastName: lname,
        emailId: email,
        phoneNo: phone,
        message: message,
      })
      .then(alert('Your Response submitted Successfully !!'))

    setFname('')
    setLname('')
    setEmail('')
    setPhone('')
    setMessage('')
  }

  return (
    <>
      <div>
        <NavBar />
        <section className="contact" id="connect">
          <Container>
            <Row className="align-items-center">
              <Col size={12} md={6}>
                <TrackVisibility>
                  {({ isVisible }) => (
                    <img
                      className={
                        isVisible ? 'animate__animated animate__zoomIn' : ''
                      }
                      src={contactImg}
                      alt="Contact Us"
                    />
                  )}
                </TrackVisibility>
              </Col>
              <Col size={12} md={6}>
                <TrackVisibility>
                  {({ isVisible }) => (
                    <div
                      className={
                        isVisible ? 'animate__animated animate__fadeIn' : ''
                      }
                    >
                      <h2>Get In Touch</h2>
                      <form onSubmit={handleSubmit}>
                        <Row>
                          <Col size={12} sm={6} className="px-1">
                            <input
                              type="text"
                              value={fname}
                              placeholder="First Name"
                              onChange={(e) => setFname(e.target.value)}
                            />
                          </Col>
                          <Col size={12} sm={6} className="px-1">
                            <input
                              type="text"
                              value={lname}
                              placeholder="Last Name"
                              onChange={(e) => setLname(e.target.value)}
                            />
                          </Col>
                          <Col size={12} sm={6} className="px-1">
                            <input
                              type="email"
                              value={email}
                              placeholder="Email Address"
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </Col>
                          <Col size={12} sm={6} className="px-1">
                            <input
                              type="tel"
                              value={phone}
                              placeholder="Phone No."
                              onChange={(e) => setPhone(e.target.value)}
                            />
                          </Col>
                          <Col size={12} className="px-1">
                            <textarea
                              rows="6"
                              value={message}
                              placeholder="Message"
                              onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                            <button type="submit" className="btn">
                              Submit
                            </button>
                          </Col>
                        </Row>
                      </form>
                    </div>
                  )}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  )
}

export default Contact
