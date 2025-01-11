import React, { useEffect, useState } from 'react'
import { getAllTodos, deleteTodo,  completeTodo, inCompleteTodo } from '../services/TodoService';
import { useNavigate } from 'react-router-dom'


const ListTodoComponent = () => {

      const [todos, setTodos] = useState([]);

      const navigator = useNavigate();

      useEffect(() => {
            listTodos();
      }, []);

      function addNewTodo(){

            navigator('/add-todo')
        }
      
      function listTodos(){

            getAllTodos().then((response) => {

                  setTodos(response.data);

            }).catch((error) => {

                  console.error(error);
            });
      }

      function updateTodo(id) {

            navigator(`/edit-todo/${id}`)
      }
    
      function removeTodo(id){
    
            console.log(id);
    
            deleteTodo(id).then((response) => {

                  alert("Todo deleted successfully");
    
                  listTodos();
    
            }).catch(error => {
    
                  console.error(error);
            })
      }

      function todoCompleted(id) {
           
            completeTodo(id).then((response) => {

                  alert("Todo completed");

                  listTodos();

            }).catch(error => {
    
                  console.error(error);
            })
      }

      function todoInCompleted(id) {
           
            inCompleteTodo(id).then((response) => {

                  alert("Todo incomplete");

                  listTodos();

            }).catch(error => {
    
                  console.error(error);
            })
      }

      return (
            <div className='container'>
                  <h2 className='text-center mb-3 mt-3 border-bottom'>Todo List</h2>
                  <button className='btn btn-primary mb-2 bi bi-database-add' onClick={addNewTodo}> Add Todo</button>
                  <div>
                        <table className="table table-striped table-bordered">
                              <thead className='table-dark'>
                                    <tr>
                                          <th>#</th>
                                          <th>Todo Title</th>
                                          <th>Todo Description</th>
                                          <th>Completed</th>
                                          <th width='38%'>Action</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {
                                          todos.map(todo => 
                                                <tr key={todo.id}>
                                                      <th scope="row">{todo.id}</th>
                                                      <td>{todo.title}</td>
                                                      <td>{todo.description}</td>
                                                      <td>{todo.completed ? 'Yes' : 'No'}</td>
                                                      <td>
                                                            <button className='btn btn-success bi bi-pencil-square' onClick={() => updateTodo(todo.id)}> Update</button>
                                                            <button className='btn btn-danger bi bi-trash' onClick={() => removeTodo(todo.id)} style={{marginLeft: '10px'}}> Delete</button>
                                                            <button className='btn btn-success bi bi-check-lg' onClick={() => todoCompleted(todo.id)} style={{marginLeft: '10px'}}> Complete</button>
                                                            <button className='btn btn-danger bi bi-x-lg' onClick={() => todoInCompleted(todo.id)} style={{marginLeft: '10px'}}> Incomplete</button>
                                                      </td>
                                                </tr>
                                          )
                                    }
                              </tbody>
                        </table>   
                  </div>
            </div>
      )
}

export default ListTodoComponent
