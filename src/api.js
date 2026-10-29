import axios from "axios";

const api = axios.create({
baseURL: "https://club-backend3-0-1.onrender.com/api",
withCredentials: true,
});

export default api;
