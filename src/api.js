import axios from "axios";

const api = axios.create({
baseURL: "https://club-backend2-0-2.onrender.com/api",
withCredentials: true,
});

export default api;
