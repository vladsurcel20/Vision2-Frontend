import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='homePage'>
        <div className='landingText'>
            <span>
                <p className='poppins-regular'>Find your canine companion and bring joy into your home effortlessly.</p>
                <Link to='/dogs'>
                    <img src="\vecteezy_dog-character-logo-logo-premium-petshop-template_23353925.jpg"></img>
                </Link>
            </span>
            <span>
                <p className='poppins-regular'>Meet loving dogs ready to become cherished members of your family today</p>
                <Link to='/dogs'>
                    <img src="\vecteezy_dog-character-logo-logo-premium-petshop-template_23353925.jpg"></img>
                </Link>
            </span>
        </div>
    </div>
  )
}

export default Home