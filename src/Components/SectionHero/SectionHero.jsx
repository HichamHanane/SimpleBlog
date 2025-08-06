import React, { useState } from 'react'
import './sectionHero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import Navbar from '../Navbar/Navbar'
import { faBlog } from '@fortawesome/free-solid-svg-icons/faBlog'
import { useNavigate } from 'react-router-dom'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { faClose } from '@fortawesome/free-solid-svg-icons/faClose'
import AddForm from '../FormAddBlog/AddForm'
import Popup from '../AddPopup/Popup'


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


function SectionHero() {
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = useState(false);

  function goToAddForm() {
    navigate('/new-blog')
  }

  

  const goToBlogs = () => {
    navigate('/blogs')
  }
  return (
    <>
      <Navbar />
      <section className='section_hero'>
        <h1 className="headline">SimpleBlog – Your space to express</h1>
        <p className="slogan">A simple platform to write and explore articles.</p>
        <div className="buttons">
          <button className="explore" onClick={() => goToBlogs()} ><FontAwesomeIcon icon={faBlog} /> Explore Blogs</button>
          <button className="button_add_blog" onClick={goToAddForm}><FontAwesomeIcon icon={faPlus} /> New blog</button>
        </div>
      </section>
      {/* <div>
        <Popup isOpen={modalIsOpen} setIsOpen={setIsOpen} close={closeModal}/>
      </div> */}
    </>
  )
}

export default SectionHero;
