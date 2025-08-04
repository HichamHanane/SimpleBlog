import React from 'react'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="header">
      <div className="logo">
        <h2>
          <Link to="/" className='logo_link'>SimpleBlog</Link>
        </h2>
      </div>
      <nav className='navLinks'>
        <Link to="/blogs" className='navLink'>Blogs</Link>
        <button><FontAwesomeIcon icon={faPlus} size='xs' /> New blog</button>
      </nav>
    </header>
  )
}

export default Navbar
