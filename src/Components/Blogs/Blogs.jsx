import { useEffect, useState } from 'react'

import Navbar from '../Navbar/Navbar'
import './Blogs.css'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import axios from 'axios'
import BlogDetails from '../BlogDetails/BlogDetails'
import Footer from '../Footer/Footer'


function Blogs() {

    let [posts, setPosts] = useState([])
    let [postID, setPostID] = useState()
    let [isLoading, setIsLoading] = useState(true);
    let navigate = useNavigate()

    
    const renderSkeletonCards = () => {
        // Crée un tableau de 10 cartes de squelette (ou le nombre que tu veux)
        return Array.from({ length: 10 }).map((_, index) => (
            <div className="skeleton-blog-card" key={index}>
                <div className="skeleton-blog-title"></div>
                <div className="skeleton-blog-bottom">
                    <div className="skeleton-read-more"></div>
                    <div className="skeleton-likes"></div>
                </div>
            </div>
        ));
    };
    const fetchPosts = async () => {
        try {
            let fetchedData = await axios.get('https://dummyjson.com/posts?limit=20');
            let data = fetchedData.data.posts;
            setIsLoading(false)
            console.log('Posts : ', data);
            localStorage.setItem('posts', JSON.stringify(data));

            setPosts(JSON.parse(localStorage.getItem('posts')))
            console.log('Posts 2 :', posts);

            return data;
        } catch (error) {
            console.log('Error fetching posts :', error);

        }


    }

    const goToBlogDetails = (id) => {
        console.log('Post :', id);
        localStorage.setItem('postID', id)
        navigate('/blog-details')
        // <BlogDetails post={post} />
    }

    useEffect(() => {
        fetchPosts();
    }, [])
    // console.log('Blogs component : ', posts);

    return (
        <div className='container_section_blogs'>
            <Navbar />
            <section className='section-blogs'>
                <div className="blog_header">
                    <h2 className='headline_blogs'>Our Blogs</h2>
                    <p className="slogan_blogs">Discover what others are writing. Stay informed and inspired</p>
                </div>

                <div className="blogs_container">
                    {
                        !isLoading ?
                            posts.map((post, index) => {
                                return (
                                    <div className="blog_card" key={index} onClick={() => goToBlogDetails(post?.id)}>
                                        <h3 className="blog_title">{post?.title}</h3>
                                        <div className="blog_card_bottom">
                                            <Link to="/blogs-details" className='blog_read_more' >Read more</Link>
                                            <p className="blog_likes">
                                                <FontAwesomeIcon icon={faThumbsUp} />
                                                {post?.reactions?.likes}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                            :
                            renderSkeletonCards()
                    }

                </div>
            </section>
            <Footer />
        </div>

    )
}

export default Blogs
