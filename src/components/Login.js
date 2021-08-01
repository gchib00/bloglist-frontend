import React, { useState } from 'react'
import loginService from '../services/login' 
import Notification from './Notification'

const Login = (props) => {
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('') 
  // eslint-disable-next-line no-unused-vars
  const [errorMessage, setErrorMessage] = useState(null)

  const handleLogin = async (event) => {
    event.preventDefault()
    console.log('logging in with', username, password)

    try {
      const user = await loginService.login({
        username, password,
      })
      setUsername('')
      setPassword('')
      window.localStorage.setItem('user', JSON.stringify(user))
      return (props.setUser(user))
    } catch (exception) {
      setErrorMessage('Wrong credentials')
      return setTimeout(() => { 
        setErrorMessage(null)
      }, 3000)
    }
  }
  const giveText = () => {
    if(errorMessage === 'Wrong credentials') {
      let text = errorMessage
      setTimeout(() => { 
        setErrorMessage(null)
      }, 3000)
      return text
    }
  }

  return(
    <div>
     <form onSubmit={handleLogin}>
        <div>
          username
            <input
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          password
            <input
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit">login</button>
      </form>
      <Notification text={giveText()} />
    </div>  
  )
}

export default Login