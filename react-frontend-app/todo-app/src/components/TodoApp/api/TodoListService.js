import axios from "axios";

const apiClient = axios.create({
   baseURL : 'http://localhost:8585/todo' 
});

export const sayHello = (username) =>  apiClient.get(`/sayHello/${username}`)

export const retrieveTodoList = () => apiClient.get(`/getAll`)

export const retrieveTodoById = (id) => apiClient.get(`/${id}`)

export const deleteTodoById = (id) => apiClient.delete(`/delete/${id}`)
