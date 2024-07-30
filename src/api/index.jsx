import axios from "axios";

const api = axios.create({
  baseURL: "https://capstone-projec-be-7.onrender.com/api",
});
export default api;
