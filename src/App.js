import React, { useState, useEffect } from 'react'
import AddBlogForm from './components/AddBlogForm'
import Blog from './components/Blog'
import Login from './components/Login'
import blogService from './services/blogs'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState('')

  const logout = () => {
    window.localStorage.setItem('user', null)
    setUser(null)
  }
  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem('user'))
    setUser(loggedUser)
    blogService.setToken(loggedUser.token)
  }, [])

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs(blogs)
    )  
  }, [])

  if (user===null || user===undefined){
    return(
      <Login 
        user={user} 
        setUser={setUser} 
    />)
  }
  return (
    <div>
      <h2>blogs</h2>
      <h4>{user.name} is logged in. <button onClick={logout}>logout</button></h4>
      <AddBlogForm user={user} setBlogs={setBlogs}/>
      <br />
      {blogs.map(blog =>
        <Blog key={blog.title} blog={blog} />
      )}
    </div>
  )
}

export default App