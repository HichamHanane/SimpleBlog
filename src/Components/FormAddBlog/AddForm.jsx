import { faClose } from '@fortawesome/free-solid-svg-icons/faClose'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import './AddForm.css'
import axios from 'axios'
import { Await, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'
import { faHourglass } from '@fortawesome/free-regular-svg-icons'
import { toast, Toaster } from 'sonner'
function AddForm({ setIsOpen, addPostToState }) {
    let [title, setTitle] = useState("")
    let [titleError, setTitleError] = useState(false)
    let [description, setDescription] = useState("")
    let [descriptionError, setDescriptionError] = useState(false)
    let [publish, setPublish] = useState(false)
    const navigate = useNavigate();

    const addPost = async (e) => {
        e.preventDefault()
        try {
            if (title != "" && description != "") {
                console.log('data', title, description);
                setPublish(true)

                let body = {
                    title,
                    body: description,
                    tags: ["sport", 'Tech'],
                    reactions: { likes: Math.floor(Math.random() * 100), dislikes: Math.floor(Math.random() * 100)},
                    userId: 45,
                    views: Math.floor(Math.random() * 1000)
                }
                console.log('BODY :' , body);
                
                let addBlog = await axios.post('https://dummyjson.com/posts/add', body);
                console.log('Add new blog :', addBlog);

                if (addBlog.status == 201) {
                    console.log('message', addBlog);

                    let newBlog = addBlog.data;
                    console.log('new blog :', newBlog);

                    addPostToState(newBlog);
                    toast.success('Blog published successfully')
                    navigate('/blogs')
                    // window.location.href = '/blogs';
                }
                

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

        } 
        catch (error) {
            console.log('Error adding new blog :', error);

        }
    }

    return (
        <div className='section_addForm_container'>
            <Navbar />
            <div className='addForm_container'>
                <div className="header_modal">
                    <h3 className='modal_headline'>New Blog</h3>
                    {/* <FontAwesomeIcon icon={faClose} onClick={closeModal} className='close_popup' /> */}
                </div>
                <form className='modal_form'>
                    <label htmlFor="Title">Title : </label><br /><br />
                    <input name='title' className='title' placeholder='Title...' onChange={(e) => setTitle(e.target.value)} />
                    {titleError ? <span className='error_message'>Title Field required !</span> : null}
                    <br /><br /><br />
                    <label htmlFor="Title">Description : </label><br /><br />
                    <textarea name="description" id="description" cols="30" rows="10" placeholder='Description...' onChange={(e) => setDescription(e.target.value)}></textarea>
                    {descriptionError ? <span className='error_message'>Description Field required !</span> : null}

                    <button onClick={addPost} className='addForm_button'>
                        <FontAwesomeIcon icon={publish ? faHourglass : faPlus} /> {publish ? "Publishing..." : "Publish"}
                    </button>
                </form>
            </div>
            <Footer />
            {/* <Toaster richColors position='top-center'/> */}
        </div>
    )
}

export default AddForm
