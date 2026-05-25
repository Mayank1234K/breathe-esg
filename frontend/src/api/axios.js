import axios from 'axios'

const API = axios.create({
  baseURL: 'https://breathe-esg-backend-csqj.onrender.com'
})

export default API