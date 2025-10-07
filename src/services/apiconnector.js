import axios from "axios"

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || 'http://localhost:4000/api/v1',
  withCredentials: true,
  timeout: 60000  // Increased timeout to 60 seconds for payment operations
});

// Add a request interceptor to include token from localStorage if available
axiosInstance.interceptors.request.use(
  (config) => {
    // Ensure headers object exists
    if (!config.headers) {
      config.headers = {};
    }
    
    // Get token from localStorage
    const token = localStorage.getItem('token');
    if (token) {
      // Remove quotes from token if present
      const cleanToken = token.replace(/"/g, '').trim();
      config.headers.Authorization = `Bearer ${cleanToken}`;
      console.log('Token found in localStorage:', cleanToken.substring(0, 20) + '...');
    } else {
      console.log('No token found in localStorage');
    }
    console.log('Making request to:', config.url);
    console.log('With headers:', config.headers);
    return config;
  },
  (error) => {
    console.error('Request interceptor error:', error);
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