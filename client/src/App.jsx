import React from 'react'
import Home from './pages/Home'
import { Route, Router, Routes } from 'react-router-dom'
import Header from './components/navs/Header'
// import SignIn from './components/auth/SignIn'
import LogIn from './components/auth/LogIn'
import SignUp from './components/auth/SignUp'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
function App() {
  return (
    <>
      <Header />
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />*/}
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App