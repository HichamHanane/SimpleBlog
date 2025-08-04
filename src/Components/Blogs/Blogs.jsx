import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Blogs.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'

function Blogs() {
    return (
        <>
            <Navbar />
            <section className='section-blogs'>
                <div className="blog_header">
                    <h2 className='headline_blogs'>Our Blogs</h2>
                    <p className="slogan_blogs">Discover what others are writing. Stay informed and inspired</p>
                </div>

                <div className="blogs_container">
                    <div className="blog_card">
                        <h3 className="blog_title">His mother had always taught him</h3>
                        <div className="blog_card_bottom">
                            <Link to="#" className='blog_read_more'>Read more</Link>
                            <p className="blog_likes">
                                <FontAwesomeIcon icon={faThumbsUp} />
                                25
                            </p>
                        </div>
                    </div>
                    <div className="blog_card">
                        <h3 className="blog_title">His mother had always taught him</h3>
                        <div className="blog_card_bottom">
                            <Link to="#" className='blog_read_more'>Read more</Link>
                            <p className="blog_likes">
                                <FontAwesomeIcon icon={faThumbsUp} />
                                25
                            </p>
                        </div>
                    </div>
                    <div className="blog_card">
                        <h3 className="blog_title">His mother had always taught him</h3>
                        <div className="blog_card_bottom">
                            <Link to="#" className='blog_read_more'>Read more</Link>
                            <p className="blog_likes">
                                <FontAwesomeIcon icon={faThumbsUp} />
                                25
                            </p>
                        </div>
                    </div>
                    <div className="blog_card">
                        <h3 className="blog_title">His mother had always taught him</h3>
                        <div className="blog_card_bottom">
                            <Link to="#" className='blog_read_more'>Read more</Link>
                            <p className="blog_likes">
                                <FontAwesomeIcon icon={faThumbsUp} />
                                25
                            </p>
                        </div>
                    </div>
                    <div className="blog_card">
                        <h3 className="blog_title">His mother had always taught him</h3>
                        <div className="blog_card_bottom">
                            <Link to="#" className='blog_read_more'>Read more</Link>
                            <p className="blog_likes">
                                <FontAwesomeIcon icon={faThumbsUp} />
                                25
                            </p>
                        </div>
                    </div>
                    
                    
                    
                    
                </div>
            </section>

        </>

    )
}

export default Blogs
