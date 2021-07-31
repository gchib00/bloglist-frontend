import axios from 'axios'
const baseUrl = '/api/blogs'
let token = null


const setToken = newToken => {
  token = `bearer ${newToken}`
}

const updateBlog = async body => {
  const updatedBlog = {
    user: body.user,
    likes: body.likes+1,
    author: body.author,
    title: body.title,
    url: body.url
  }
  const request = await axios.put(baseUrl+`/${body.user.id}`, updatedBlog)
  return request
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}
const addBlog = async body => {
  const config = {
    headers: { Authorization: token },
  }
  const newBlog = {
    title: body.title,
    author: body.author,
    url: body.url
  }
  const response = await axios.post(baseUrl, newBlog, config)
  return response.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, addBlog, setToken, updateBlog }