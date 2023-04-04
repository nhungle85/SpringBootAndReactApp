import { apiClient } from "./ApiClient"

export const sayHello = (username) =>  apiClient.get(`/sayHello/${username}`)

export const retrieveTodoList = () => apiClient.get(`/getAll`)

export const retrieveTodoById = (id) => apiClient.get(`/${id}`)

export const deleteTodoById = (id) => apiClient.delete(`/delete/${id}`)

export const executeBasicAuth = (token) => apiClient.get(`/basicauth`, {
   headers: {
      Authorization: token
   }
})

