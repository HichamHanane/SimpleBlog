import React, { useState } from 'react'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { Link } from 'react-router-dom'
import Popup from '../AddPopup/Popup'

function Navbar() {

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const goToBlogs = () => {
    navigate('/blogs')
  }
  return (
    <>
      <header className="header">
        <div className="logo">
          <h2>
            <Link to="/" className='logo_link'>SimpleBlog</Link>
          </h2>
        </div>
        <nav className='navLinks'>
          <Link to="/blogs" className='navLink'>Blogs</Link>
          <button onClick={openModal}><FontAwesomeIcon icon={faPlus} size='xs' /> New blog</button>
        </nav>
      </header>

      <Popup isOpen={modalIsOpen} setIsOpen={setIsOpen} close={closeModal} />

    </>
  )
}

export default Navbar
