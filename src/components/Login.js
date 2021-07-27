import React, { useState } from 'react'
import loginService from '../services/login' 


const Login = (props) => {
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('') 


  const handleLogin = async (event) => {
    event.preventDefault()
    console.log('logging in with', username, password)

    try {
      const user = await loginService.login({
        username, password,
      })
      console.log('user =', user)
      props.setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      props.setErrorMessage('Wrong credentials')
      setTimeout(() => {
        props.setErrorMessage(null)
      }, 5000)
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
    </div>  
  )
}

export default Login