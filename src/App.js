import { useState, useEffect, useRef } from 'react'
import BlogList from './components/BlogList'
import LogIn from './components/LogIn'
import CreateBlog from './components/CreateBlog'
import Togglable from './components/Togglable'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPasswod] = useState('')
  //create blog
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  //ref
  const createBlogRef = useRef()

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs(blogs)
    )
  }, [])

  useEffect(() => {
    const loggedInUser = window.localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      setUserRelated(JSON.parse(loggedInUser))
    }
  }, [])

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const loginUser = await loginService.validateUser({ username, password })

      window.localStorage.setItem('loggedInUser', JSON.stringify(loginUser))
      setUserRelated(loginUser)
      setUsername('')
      setPasswod('')
    } catch (err) {
      console.error(err)
    }
  }

  const handleCreateBlog = (e) => {
    e.preventDefault()
    console.log('create blog')
  }

  const handleLogOut = () => {
    window.localStorage.removeItem('loggedInUser')
    setUserRelated(null)
  }

  //onChange handlers
  const usernameOnChange = (e) => {
    setUsername(e.target.value)
  }

  const passwordOnChange = (e) => {
    setPasswod(e.target.value)
  }

  const titleOnChange = (e) => {
    setTitle(e.target.value)
  }

  const authorOnChange = (e) => {
    setAuthor(e.target.value)
  }

  const urlOnChange = (e) => {
    setUrl(e.target.value)
  }

  //helper functions
  const setUserRelated = user => {
    setUser(user)
    blogService.setToken(user.token)
  }

  return (
    <>
      {user === null
        && <LogIn
          username={username}
          password={password}
          usernameOnChange={usernameOnChange}
          passwordOnChange={passwordOnChange}
          handleSubmit={handleLogin}
        />
      }
      {user !== null
        && <>
          <Togglable text='new blog'>
            <CreateBlog
              title={title}
              author={author}
              url={url}
              titleOnChange={titleOnChange}
              authorOnChange={authorOnChange}
              urlOnChange={urlOnChange}
              handleSubmit={handleCreateBlog}
              ref={createBlogRef}
            />
          </Togglable>
          <BlogList
            blogs={blogs}
            name={user.name}
            handleLogOut={handleLogOut}
          />
        </>
      }
    </>
  )
}

export default App
