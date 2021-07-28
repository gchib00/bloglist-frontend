import axios from 'axios'
const baseUrl = '/api/blogs'
let token = null


const setToken = newToken => {
  token = `bearer ${newToken}`
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
export default { getAll, addBlog, setToken }