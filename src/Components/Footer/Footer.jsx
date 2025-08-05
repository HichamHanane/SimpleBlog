import React from 'react'
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <footer>
            <div className="top_footer">
                <p className="footer_logo">SimpleBlog</p>
                <div className="footer_media">
                    <Link to="https://www.facebook.com/" target='_blank' style={{ color: "white" }}><FontAwesomeIcon icon={faFacebookF} size='xl' className='icon' /></Link>
                    <Link to="https://www.twitter.com/" target='_blank' style={{ color: "white" }}><FontAwesomeIcon icon={faXTwitter} size='xl' className='icon' /></Link>
                    <Link to="https://www.instagram.com/" target='_blank'style={{ color: "white" }}><FontAwesomeIcon icon={faInstagram} size='xl' className='icon' /></Link>

                </div>
            </div>
            <div className="bottom_footer">
                <p className="copyRights">
                    SimpleBlog @ 2025 All Rights Reserved
                </p>
            </div>
        </footer>
    )
}

export default Footer
