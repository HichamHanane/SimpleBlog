import { faClose } from '@fortawesome/free-solid-svg-icons/faClose'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import './AddForm.css'
import axios from 'axios'
import { Await } from 'react-router-dom'
function AddForm({ setIsOpen }) {
    let [title, setTitle] = useState("")
    let [titleError, setTitleError] = useState(false)
    let [description, setDescription] = useState("")
    let [descriptionError, setDescriptionError] = useState(false)

    // const [modalIsOpen, setIsOpen] = useState(false);


    function closeModal() {
        setIsOpen(false);
    }


    const addPost = async (e) => {
        e.preventDefault()
        try {
            if (title != "" && description != "") {
                console.log('data', title, description);
                let body = {
                    title,
                    body: description,
                    tags: ["sport", 'Tech'],
                    reactions: { likes: 33, dislikes: 10 },
                    userId: 45,
                    views: 49
                }
                let addBlog = await axios.post('https://dummyjson.com/posts/add', body);
                if (addBlog.status == 201) {
                    let newBlog = addBlog.data;
                    console.log('new blog :', newBlog);
                    
                    let posts = JSON.parse(localStorage.getItem('posts'));
                    console.log('old posts :' ,posts);
                    
                    posts.push(newBlog);
                    console.log('new posts :',posts);
                    
                    localStorage.setItem('posts',JSON.stringify(posts) );
                    // setIsOpen(false);
                    // alert('Post add successfully')

                }
                console.log('Add new blog :', addBlog);

                return;
            }

            if (title == "") {
                setTitleError(true);
            }
            else {
                setTitleError(false);

            }

            if (description == "") {
                setDescriptionError(true);
            }
            else {
                setDescriptionError(false);
            }
        } catch (error) {
            console.log('Error adding new blog :', error);

        }






    }

    return (
        <div>
            <div className="header_modal">
                <h3 className='modal_headline'>New Blog</h3>
                <FontAwesomeIcon icon={faClose} onClick={closeModal} className='close_popup' />
            </div>
            <form className='modal_form'>
                <label htmlFor="Title">Title : </label><br /><br />
                <input name='title' className='title' placeholder='Title...' onChange={(e) => setTitle(e.target.value)} />
                {titleError ? <span className='error_message'>Title Field required !</span> : null}
                <br /><br /><br />
                <label htmlFor="Title">Description : </label><br /><br />
                <textarea name="description" id="description" cols="30" rows="10" placeholder='Description...' onChange={(e) => setDescription(e.target.value)}></textarea>
                {descriptionError ? <span className='error_message'>Description Field required !</span> : null}

                <button onClick={addPost} className='addForm_button'><FontAwesomeIcon icon={faPlus} /> Post</button>
            </form>
        </div>
    )
}

export default AddForm
