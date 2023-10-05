import React from 'react'
import { Link } from 'react-router-dom'
import image1 from '../images/codeprof.png'

export default function Navbar() {
  return (
    <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/career">Career</Link>
          <Link to='/courses'>Courses</Link>
          <Link to='/contact'>Contact</Link>
        </nav>

        <div className='right'>
          <img src={image1} width='40px'/>
          <h2>CODEPROF ACADEMY</h2>
        </div>
    </header>
  )
}
