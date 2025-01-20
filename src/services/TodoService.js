import axios from "axios";
import { getToken } from "./AuthService";

const BASE_REST_API_URL = "http://localhost:8080/api/v1/todos";

// Add a request interceptor
axios.interceptors.request.use(function (config) {

      config.headers['Authorization'] = getToken();

      return config;
}, function (error) {
      
      return Promise.reject(error);
});

export function getAllTodos(){

      return axios.get(BASE_REST_API_URL + "/all");
}

export function createTodo(todo){

      return axios.post(BASE_REST_API_URL + "/create", todo);
}

export function getTodoById(todoId){

      return axios.get(BASE_REST_API_URL + "/get/" + todoId);
}

export function updateTodo(todoId, todo){
     
      return axios.put(BASE_REST_API_URL + "/update/" + todoId, todo);
}

export function deleteTodo(todoId){

      return axios.delete(BASE_REST_API_URL + "/delete/" + todoId)
}

export function completeTodo(todoId){

      return axios.patch(BASE_REST_API_URL + "/complete/" + todoId);
}

export function inCompleteTodo(todoId){

      return axios.patch(BASE_REST_API_URL + "/incomplete/" + todoId);
}