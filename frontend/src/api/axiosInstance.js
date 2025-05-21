// src/api/axiosInstance.js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://notes-be-072-23024569990.us-central1.run.app", // Ganti dengan base URL backend-mu
  withCredentials: true, // untuk kirim cookie kalau dibutuhkan
});

export default instance;