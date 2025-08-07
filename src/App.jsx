import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import SectionHero from './Components/SectionHero/sectionHero'
import { Route, Routes, useLocation } from 'react-router-dom'
import Blogs from './Components/Blogs/Blogs'
import BlogDetails from './Components/BlogDetails/BlogDetails'
import AddForm from './Components/FormAddBlog/AddForm'
import axios from 'axios'
// import SectionHero from './Components/SectionHero/SectionHero'

function App() {
  let [posts, setPosts] = useState([])
  // let [postID, setPostID] = useState()
  let [isLoading, setIsLoading] = useState(true);


  const addPostToState = (newPost) => {
    posts.unshift(newPost)
    localStorage.setItem('posts', JSON.stringify(posts));
  };
  
  const fetchPosts = async () => {
    try {
      if (localStorage.getItem('posts')) {
        setPosts(JSON.parse(localStorage.getItem('posts')))
        setIsLoading(false)

        return;
      }

      let fetchedData = await axios.get('https://dummyjson.com/posts?limit=30');
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

  useEffect(() => {
    fetchPosts();
  }, [])
  return (
    <>

      <Routes>
        <Route path='/' element={<SectionHero />} />
        <Route path='/blogs' element={<Blogs posts={posts} isLoading={isLoading} />} />
        <Route path='/blog-details' element={<BlogDetails />} />
        <Route path='/new-blog' element={<AddForm addPostToState={addPostToState} />} />

      </Routes>
    </>
  )
}

export default App
