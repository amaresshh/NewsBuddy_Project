import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AlanNews from './AlanNews'
import GetStarted from './components/LandingPage/Getstarted'
import Login from './components/LandingPage/Login'
import Signup from './components/LandingPage/Signup'
import { auth } from './firebase'

const App = () => {
  // const [user, setUser] = useState('')

  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       setUser(user)
  //     } else {
  //       setUser(null)
  //     }
  //   })
  // }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/alannews" element={<AlanNews />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App