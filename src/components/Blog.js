import React from 'react'
import Togglable from './Togglable'
import blogServices from '../services/blogs'

const blogStyle = {
  paddingTop: 10,
  paddingLeft: 2,
  border: 'solid',
  borderWidth: 1,
  marginBottom: 5
}
const incrementLikes = (blog, setBlogs) => {
  blogServices.updateBlog(blog)
  blogServices.getAll().then(blogs => {
    setBlogs(blogs)
  })
}

const Blog = ({blog, setBlogs}) => (
  <div style={blogStyle}>
    {blog.title} {blog.author}
    <Togglable btnLabel='view' btnHide='hide'>
      <div>
        {blog.url}
        <div>
          likes: {blog.likes}<button onClick={()=>incrementLikes(blog, setBlogs)}>like</button>
        </div>
        {blog.author}
      </div>
    </Togglable>
  </div>  
)

export default Blog