import axios from "axios";

export const apiClient = axios.create({
   baseURL : process.env.REACT_APP_TODO_SERVICE_URL 
});