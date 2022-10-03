import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import BlogList from './components/BlogList'
import blogService from './services/blogs'

const App = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  return (
    <BlogList blogs = {blogs}/>
  )
}

export default App
