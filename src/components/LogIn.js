import { useState } from 'react'
import PropTypes from 'prop-types'

const LogIn = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPasswod] = useState('')

  const usernameOnChange = (e) => {
    setUsername(e.target.value)
  }

  const passwordOnChange = (e) => {
    setPasswod(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setUsername('')
    setPasswod('')
    await props.handleLogin(username, password)
  }

  return (
    <div>
      <h2>log in to application</h2>
      <form onSubmit={handleSubmit}>
        <div>
          username
          <input
            type='text'
            name='username'
            value={username}
            onChange={usernameOnChange}
          />
        </div>
        <div>
          password
          <input
            type='password'
            name='password'
            value={password}
            onChange={passwordOnChange}
          />
        </div>
        <button type='submit'>LogIn</button>
      </form>
    </div>
  )
}

LogIn.propTypes = {
  handleLogin: PropTypes.func.isRequired
}

export default LogIn