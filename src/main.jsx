import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import DogsPage from './DogsPage.jsx'
import AddDog from './AddDog.jsx'
import EditDog from './EditDog.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header'
import Footer from './Components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router > 
            <Routes>
                <Route path='*' element={<App />} />
            </Routes>
        </Router>
        <Footer />
  </React.StrictMode>,
)
