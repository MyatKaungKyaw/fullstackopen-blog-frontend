import { useState, useEffect } from 'react'
import BlogList from './components/BlogList'
import LogIn from './components/LogIn'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPasswod] = useState('')

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs(blogs)
    )
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const loginUser = await loginService.validateUser({ username, password })
      setUser(loginUser)
      setUsername('')
      setPasswod('')
    } catch (err){
      console.error(err)
    }
  }

  const usernameOnChange = (target) => {
    setUsername(target.value)
  }

  const passwordOnChange = (target) => {
    setPasswod(target.value)
  }

  return (
    <>
      {user === null
        && <LogIn
          username={username}
          password={password}
          usernameOnChange={usernameOnChange}
          passwordOnChange={passwordOnChange}
          handleSubmit={handleSubmit}
        />}
      {user !== null && <BlogList blogs={blogs} />}
    </>
  )
}

export default App
