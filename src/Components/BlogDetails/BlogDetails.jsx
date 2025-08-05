import React, { useEffect } from 'react'
import './BlogDetails.css'
import Navbar from '../Navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faThumbsDown, faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'


function BlogDetails() {
    let [post , setPost]=useState({});

    useEffect(()=>{
        let posts =JSON.parse(localStorage.getItem('posts'));
        let postID =localStorage.getItem('postID');
        console.log('id :',postID);
        
        let targetPost = posts.find((post)=> post.id == postID);
        console.log('target post : ', targetPost);
        
        setPost(targetPost)
        console.log('Poost : ', post);
        
    },[])
    return (
        <>  
            <Navbar />
            <article className='blog_details'>
                <h2 className="blog_details_title">{post?.title}</h2>
                <div className="tags">
                    {
                        post?.tags?.map((tag,index)=>{
                            return <p key={index}>{tag}</p>
                        })
                    }
                </div>
                <br />
                <p className="blog_details_description">
                    {post?.body}
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero corrupti nisi ea enim obcaecati, quas non laborum voluptatem fuga ut cum commodi facilis iste iusto, eum explicabo dignissimos! Architecto, perferendis.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero corrupti nisi ea enim obcaecati, quas non laborum voluptatem fuga ut cum commodi facilis iste iusto, eum explicabo dignissimos! Architecto, perferendis.
                    
                </p>
                <div className="blog_details_bottom">
                    <div className="views">
                        <FontAwesomeIcon icon={faEye} size='xs'/>
                        {post?.views} 
                    </div>
                    <div className="blog_details_likes">
                        <FontAwesomeIcon icon={faThumbsUp} /> {post?.reactions?.likes}
                        &nbsp;&nbsp;&nbsp;
                        <FontAwesomeIcon icon={faThumbsDown} />{post?.reactions?.dislikes}
                    </div>
                </div>
            </article>
        </>
    )
}

export default BlogDetails
