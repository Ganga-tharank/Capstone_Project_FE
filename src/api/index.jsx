import axios from "axios";

const api = axios.create({
  baseURL: "https://capstone-projec-be-12.onrender.com/api",
});
export default api;
