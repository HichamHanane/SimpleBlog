import React from 'react'
import './sectionHero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import Navbar from '../Navbar/Navbar'
import { faBlog } from '@fortawesome/free-solid-svg-icons/faBlog'



function SectionHero() {
  return (
    <>
        <Navbar />
        <section className='section_hero'>
          <h1 className="headline">SimpleBlog – Your space to express</h1>
          <p className="slogan">A simple platform to write and explore articles.</p>
          <div className="buttons">
            <button className="explore"><FontAwesomeIcon icon={faBlog} />  Explore Blogs</button>
            <button className="button_add_blog"><FontAwesomeIcon icon={faPlus} /> New blog</button>
          </div>
        </section>
    </>
  )
}

export default SectionHero;
