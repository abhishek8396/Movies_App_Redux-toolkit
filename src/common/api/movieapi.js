import axios from "axios";

// Fetch the base URL from environment variables
const baseURL = process.env.NEXT_PUBLIC_OMDB_BASE_URL || "http://www.omdbapi.com";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;
