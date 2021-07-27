import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import Login from './components/Login'
import blogService from './services/blogs'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  // eslint-disable-next-line no-unused-vars
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])
  
  if (user===null || user===undefined){
    return(
      <Login 
        user={user} 
        setUser={setUser} 
        setErrorMessage={setErrorMessage}   
    />)
  }
  return (
    <div>
      <h2>blogs</h2>
      {blogs.map(blog =>
        <Blog key={blog.title} blog={blog} />
      )}
    </div>
  )
}

export default App