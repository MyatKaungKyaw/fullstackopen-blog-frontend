import { useState, useEffect } from 'react'
import BlogList from './components/BlogList'
import CreateBlog from './components/CreateBlog'
import LogIn from './components/LogIn'
import CreateBlog from './components/CreateBlog'
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

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs(blogs)
    )
  }, [])

  useEffect(() => {
    const loggedInUser = window.localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser))
    }
  }, [])

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const loginUser = await loginService.validateUser({ username, password })

      window.localStorage.setItem('loggedInUser', JSON.stringify(loginUser))
      setUser(loginUser)
      setUsername('')
      setPasswod('')
    } catch (err) {
      console.error(err)
    }
  }

  const handleLogOut = () => {
    window.localStorage.removeItem('loggedInUser')
    setUser(null)
  }

  const usernameOnChange = (e) => {
    setUsername(target.value)
  }

  const passwordOnChange = (target) => {
    setPasswod(target.value)
  }

  const titleOnChange = (target) => {
    setTitle(target.value)
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
          <CreateBlog
            title={title}
            author={author}
            url={url}
            
          />
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
