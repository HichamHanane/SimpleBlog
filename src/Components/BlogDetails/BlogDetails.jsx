import React from 'react'
import './BlogDetails.css'
import Navbar from '../Navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faThumbsDown, faThumbsUp } from '@fortawesome/free-regular-svg-icons'


function BlogDetails() {
    return (
        <>  
            <Navbar />
            <article className='blog_details'>
                <h2 className="blog_details_title">His mother had always taught him</h2>
                <div className="tags">
                    <p>tag</p>
                    <p>tag</p>
                    <p>tag</p>
                </div>
                <br />
                <p className="blog_details_description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero corrupti nisi ea enim obcaecati, quas non laborum voluptatem fuga ut cum commodi facilis iste iusto, eum explicabo dignissimos! Architecto, perferendis.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero corrupti nisi ea enim obcaecati, quas non laborum voluptatem fuga ut cum commodi facilis iste iusto, eum explicabo dignissimos! Architecto, perferendis.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero corrupti nisi ea enim obcaecati, quas non laborum voluptatem fuga ut cum commodi facilis iste iusto, eum explicabo dignissimos! Architecto, perferendis.
                </p>
                <div className="blog_details_bottom">
                    <div className="views">
                        <FontAwesomeIcon icon={faEye} size='xs'/>
                        10 
                    </div>
                    <div className="blog_details_likes">
                        <FontAwesomeIcon icon={faThumbsUp} /> 15
                        
                        <FontAwesomeIcon icon={faThumbsDown} />5
                    </div>
                </div>
            </article>
        </>
    )
}

export default BlogDetails
