import axios from 'axios'
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || '/api',
  timeout: 10000,
})
export const getUsers   = () => api.get('/users')
export const createUser = (p) => api.post('/users', p)
export const login      = (p) => api.post('/login', p)
export const register   = (p) => api.post('/register', p)
export default api
