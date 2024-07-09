import React from 'react'
import { BrowserRouter as Router, Routes, Route , Link } from 'react-router-dom'

const Header = () => {
  return (
  
    <header>
        <nav>
            <ul className='navList'>
                <li className='navItem'><Link to='/'>Home</Link></li>
                <li className='navItem'><Link to='/dogs'>See the dogs</Link></li>
                <li className='navItem'><Link to='/dogs/new'>Register a dog</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header