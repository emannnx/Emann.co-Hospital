import React from 'react'
import Header from '../src/Components/Header'
import HomePage from '../src/Pages/Home'
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import AllDoctors from '../src/Pages/AllDoctors'


const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/AllDoctors' element={<AllDoctors />} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
