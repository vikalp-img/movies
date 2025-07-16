import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './components/Main'
import { Route, Routes } from 'react-router'
import LandingPage from './components/Pages/Details/LandingPage'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Main />} />
      
      <Route path='/details/:mediaType/:id' element={<LandingPage />} />

      
      </Routes>
    </>
  )
}

export default App
