import { useEffect, useState } from 'react'

import Navbar from '../Navbar/Navbar'
import './Blogs.css'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import axios from 'axios'
import BlogDetails from '../BlogDetails/BlogDetails'


function Blogs() {

    let [posts, setPosts] = useState([])
    let [postID,setPostID] = useState()
    let navigate = useNavigate()
    const fetchPosts = async () => {
        let fetchedData = await axios.get('https://dummyjson.com/posts?limit=20');
        let data = fetchedData.data.posts;
        console.log('Posts : ', data);
        localStorage.setItem('posts', JSON.stringify(data));
        // posts = JSON.parse(localStorage.getItem('posts'))
        setPosts(JSON.parse(localStorage.getItem('posts')))
        console.log('Posts 2 :', posts);

        return data;

    }

    const goToBlogDetails = (id) => {
        console.log('Post :',id);
        localStorage.setItem('postID',id)
        navigate('/blog-details')
        // <BlogDetails post={post} />
    }

    useEffect(() => {
        fetchPosts();
    }, [])
    // console.log('Blogs component : ', posts);

    return (
        <>
            <Navbar />
            <section className='section-blogs'>
                <div className="blog_header">
                    <h2 className='headline_blogs'>Our Blogs</h2>
                    <p className="slogan_blogs">Discover what others are writing. Stay informed and inspired</p>
                </div>

                <div className="blogs_container">
                    {
                        posts.map((post, index) => {
                            return (
                                <div className="blog_card" key={index} onClick={()=>goToBlogDetails(post?.id)}>
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
                    }
                    
                </div>
            </section>

        </>

    )
}

export default Blogs
