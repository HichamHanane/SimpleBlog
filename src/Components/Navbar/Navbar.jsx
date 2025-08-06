import React, { useState } from 'react'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { Link, useNavigate } from 'react-router-dom'
import Popup from '../AddPopup/Popup'

function Navbar() {
  const navigate = useNavigate()
  const [modalIsOpen, setIsOpen] = useState(false);

  function goToAddForm() {
    navigate('/new-blog')
  }


  // const goToBlogs = () => {
  //   navigate('/blogs')
  // }
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
          <button onClick={goToAddForm}><FontAwesomeIcon icon={faPlus} size='xs' /> New blog</button>
        </nav>
      </header>

      {/* <Popup isOpen={modalIsOpen} setIsOpen={setIsOpen} close={closeModal} /> */}

    </>
  )
}

export default Navbar
