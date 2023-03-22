import axios from "axios";

const apiClient = axios.create({
   baseURL : 'http://localhost:8585/todo' 
});

export const sayHello = (token, username) =>  apiClient.get(`/sayHello/${username}`, {
   headers: {
      Authorization: token
   }
})

export const retrieveTodoList = (token) => apiClient.get(`/getAll`, {
   headers: {
      Authorization: token
   }
})

export const retrieveTodoById = (token, id) => apiClient.get(`/${id}`, {
   headers: {
      Authorization: token
   }
})

export const deleteTodoById = (token, id) => apiClient.delete(`/delete/${id}`, {
   headers: {
      Authorization: token
   }
})

export const executeBasicAuth = (token) => apiClient.get(`/basicauth`, {
      headers: {
         Authorization: token
      }
})

