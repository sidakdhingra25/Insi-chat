import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://insi-chat-backend.vercel.app/api",
  withCredentials: true,
});