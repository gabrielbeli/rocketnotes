import axios from "axios";

export const api = axios.create({
  baseURL: 'https://rocketnotes-api-qfe3.onrender.com'
});