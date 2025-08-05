// import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import SectionHero from './Components/SectionHero/sectionHero'
import { Route, Routes } from 'react-router-dom'
import Blogs from './Components/Blogs/Blogs'
import BlogDetails from './Components/BlogDetails/BlogDetails'
// import SectionHero from './Components/SectionHero/SectionHero'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

      <Routes>
        <Route path='/' element={<SectionHero />} />
        <Route path='/blogs' element={<Blogs  test="hicham" />} />
        <Route path='/blog-details' element={<BlogDetails />} />
      </Routes>
    </>
  )
}

export default App
