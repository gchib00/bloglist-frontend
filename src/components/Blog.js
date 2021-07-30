import React from 'react'
import Togglable from './Togglable'

const blogStyle = {
  paddingTop: 10,
  paddingLeft: 2,
  border: 'solid',
  borderWidth: 1,
  marginBottom: 5
}

const Blog = ({blog}) => (
  <div style={blogStyle}>
    {blog.title} {blog.author}
    <Togglable btnLabel='view' btnHide='hide'>
      <div>
        {blog.url}
        <div>
          likes: {blog.likes}<button>like</button>
        </div>
        {blog.author}
      </div>
    </Togglable>
  </div>  
)

export default Blog