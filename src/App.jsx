import React from 'react'
import Header from '../src/Components/Header'
import HomePage from '../src/Pages/Home'
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";


const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<HomePage />} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
