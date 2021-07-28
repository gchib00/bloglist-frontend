import React, { useState } from 'react'
import blogService from '../services/blogs' 

const AddBlogForm = (props) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const addBlog = (event) => {
    const reRenderBlogs = () => {
      blogService.getAll().then(blogs =>
        props.setBlogs(blogs)
      )
    }
    event.preventDefault()
    try{
      blogService.addBlog({title, author, url})
        .then(reRenderBlogs())
      setTitle('')
      setAuthor('')
      setUrl('')
    } catch (error) {
      console.log(error)
    }

  } 

  return(
    <form onSubmit={addBlog}>
      <div>
      title:
        <input
        type="text"
        value={title}
        name="title"
        onChange={({ target }) => setTitle(target.value)}
      />
      </div>
      <div>
        author:
          <input
          type="text"
          value={author}
          name="author"
          onChange={({ target }) => setAuthor(target.value)}
        />
      </div>
      <div>
        url:
          <input
          type="text"
          value={url}
          name="url"
          onChange={({ target }) => setUrl(target.value)}
        />
      </div>
      <button type="submit">create</button>
    </form>
  )
}

export default AddBlogForm