import axios from "axios"

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || 'http://localhost:4000/api/v1',
  withCredentials: true,
  timeout: 30000
});

// Add a request interceptor to include token from localStorage if available
axiosInstance.interceptors.request.use(
  (config) => {
    // Get token from localStorage
    const token = localStorage.getItem('token');
    if (token) {
      // Remove quotes from token if present
      const cleanToken = token.replace(/"/g, '');
      config.headers.Authorization = `Bearer ${cleanToken}`;
    }
    console.log('Request config:', config.url, config.headers.Authorization ? 'Token present' : 'No token');
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const apiConnector = (method, url, bodyData, headers, params) => {
    return axiosInstance({
        method:`${method}`,
        url:`${url}`,
        data: bodyData ? bodyData : null,
        headers: headers ? headers: null,
        params: params ? params : null,
    });
}