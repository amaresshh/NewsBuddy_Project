import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AlanNews from './AlanNews'
// import GetStarted from './components/LandingPage/Getstarted'
import Login from './components/LandingPage/Login'
import Signup from './components/LandingPage/Signup'
import BitcoinPage from './components/Bitcoin/BitcoinPage'
import Banner from './components/LandingPage/Banner'
import Contact from './components/LandingPage/Contact'
// import { auth } from './firebase'

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
        <Route path="/" element={<Banner />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/alannews" element={<AlanNews />} />
        <Route path="/bitcoindata" element={<BitcoinPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
