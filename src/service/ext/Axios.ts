import axios from 'axios'

const axiosInstance = axios.create({
  headers: {
    "Content-type": "application/json"
  }
})

axiosInstance.interceptors.request.use(request => {
  return request
})

axiosInstance.interceptors.response.use(response => {
  console.log(response.status, JSON.stringify(response?.data))
  return response
})

export default axiosInstance
