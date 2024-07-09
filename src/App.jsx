import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import DogsPage from './DogsPage'
import AddDog from './AddDog'
import EditDog from './EditDog'
import Home from './Home'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route exact path='/' element={<Home />} /> 
        <Route path='/dogs' element={<DogsPage />} />
        <Route path='/dogs/new' element={<AddDog />} />
        <Route path='/dogs/:dogId' element={<EditDog />} />
        <Route path='*' element={<Home />} />
      </Routes>
    <Footer />
    </>
  )
}

export default App
