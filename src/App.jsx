import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import DrinkDetails from './components/Home/DrinkDetails'


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/details/:name" element={<DrinkDetails/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App