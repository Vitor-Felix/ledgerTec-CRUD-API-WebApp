import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:9099",
});

export default api;
