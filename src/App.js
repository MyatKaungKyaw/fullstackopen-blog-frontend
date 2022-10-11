import { useState, useEffect, useRef } from 'react'
import BlogList from './components/BlogList'
import LogIn from './components/LogIn'
import CreateBlog from './components/CreateBlog'
import Togglable from './components/Togglable'
import NotificationBar from './components/NotificationBar'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  //notification
  const [message, setMessage] = useState(null)
  const [isErrMsg, setIsErrMsg] = useState(false)

  //ref
  const createBlogRef = useRef()

  useEffect(() => {
    const loggedInUser = window.localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      setAllBlogs()
      setUserRelated(JSON.parse(loggedInUser))
    }
  }, [])

  const handleLogin = async (username, password) => {
    try {
      const loginUser = await loginService.validateUser({ username, password })

      await setAllBlogs()
      window.localStorage.setItem('loggedInUser', JSON.stringify(loginUser))
      setUserRelated(loginUser)
    } catch (err) {
      showErrMsg('username or password incorrect')
      console.error(err)
    }
  }

  const createBlog = async (blog) => {
    try {
      const returnBlog = await blogService.create(blog)
      createBlogRef.current.hide()
      showMsg(`a new blog ${returnBlog.title} added`)
      await setAllBlogs()
    } catch (err) {
      console.error(err)
    }
  }

  const handleLogOut = () => {
    window.localStorage.removeItem('loggedInUser')
    setUserRelated(null)
  }

  //helper functions
  const setUserRelated = user => {
    if (user !== null) {
      setUser(user)
      blogService.setToken(user.token)
    } else {
      setUser(null)
      blogService.setToken(null)
    }
  }

  const setAllBlogs = async () => {
    const returnBlogs = await blogService.getAll()
    setBlogs(returnBlogs)
  }

  const showMsg = (message) => {
    setMessage(message)
    setIsErrMsg(false)
    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }

  const showErrMsg = (message) => {
    setMessage(message)
    setIsErrMsg(true)
    setTimeout(() => {
      setMessage(null)
      setIsErrMsg(true)
    }, 5000)
  }

  return (
    <>
      <NotificationBar message={message} isErr={isErrMsg} />
      <div className={message !== null ? 'show-notification-position' : ''}>
        {user === null
          && <LogIn handleLogin={handleLogin} />
        }
        {user !== null
          && <>
            <h2>blogs</h2>
            <p>{user.name} logged in</p>
            <button onClick={handleLogOut}>logout</button>
            
            <Togglable text='new blog' ref={createBlogRef}>
              <CreateBlog
                createBlog={createBlog}
              />
            </Togglable>
            <BlogList
              blogs={blogs}
            />
          </>
        }
      </div>
    </>
  )
}

export default App
