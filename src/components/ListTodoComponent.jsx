import React, { useEffect, useState } from 'react'
import { getAllTodos, deleteTodo,  completeTodo, inCompleteTodo } from '../services/TodoService';
import { useNavigate } from 'react-router-dom'
import { isAdminUser } from '../services/AuthService';

const ListTodoComponent = () => {

      const [todos, setTodos] = useState([]);

      const navigator = useNavigate();

      const isAdmin = isAdminUser();

      //pagination
      const [currentPage, setCurrentPage] = useState(1);
      const todosPerPage = 7;
      const lastIndex = currentPage * todosPerPage;
      const firstIndex = lastIndex - todosPerPage;
      const records = todos.slice(firstIndex, lastIndex);
      const npages = Math.ceil(todos.length / todosPerPage);
      const pageNumbers = [...Array(npages + 1).keys()].slice(1);
      //end pagination

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

                  console.log(response.data);

                  alert("Todo deleted successfully");
    
                  listTodos();
    
            }).catch(error => {
    
                  console.error(error);
            })
      }

      function todoCompleted(id) {
           
            completeTodo(id).then((response) => {

                  console.log(response.data);

                  alert("Todo completed");

                  listTodos();

            }).catch(error => {
    
                  console.error(error);
            })
      }

      function todoInCompleted(id) {
           
            inCompleteTodo(id).then((response) => {

                  console.log(response.data);

                  alert("Todo incomplete");

                  listTodos();

            }).catch(error => {
    
                  console.error(error);
            })
      }

      return (
            <div className='container'>
                  <h2 className='text-center mb-3 mt-3 border-bottom'>Todo List</h2>
                  {
                        isAdmin &&
                        <button className='btn btn-primary mb-2 bi bi-database-add' onClick={addNewTodo}> Add Todo</button>
                  }
                  <div>
                        <table className="table table-striped table-bordered">
                              <thead className='table-dark'>
                                    <tr>
                                          <th>#</th>
                                          <th>Todo Title</th>
                                          <th>Todo Description</th>
                                          <th>Completed</th>
                                          <th width='17%'>Action</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {
                                          records.map(todo => 
                                                <tr key={todo.id}>
                                                      <th scope="row">{todo.id}</th>
                                                      <td>{todo.title}</td>
                                                      <td>{todo.description}</td>
                                                      <td>{todo.completed ? 'Yes' : 'No'}</td>
                                                      <td>
                                                            {
                                                                  isAdmin &&
                                                                  <button className='btn btn-success bi bi-pencil-square' onClick={() => updateTodo(todo.id)}></button>
                                                            }
                                                            {
                                                                  isAdmin &&
                                                                  <button className='btn btn-danger bi bi-trash' onClick={() => removeTodo(todo.id)} style={{marginLeft: '10px'}}></button>
                                                            }
                                                            <button className='btn btn-success bi bi-check-lg' onClick={() => todoCompleted(todo.id)} style={{marginLeft: '10px'}}></button>
                                                            <button className='btn btn-danger bi bi-x-lg' onClick={() => todoInCompleted(todo.id)} style={{marginLeft: '10px'}}></button>
                                                      </td>
                                                </tr>
                                          )
                                    }
                              </tbody>
                        </table> 
                        <nav aria-label="Page navigation example">
                              <ul className="pagination justify-content-center">
                                    <li className="page-item">
                                          <a className="page-link" href="#" onClick={prevPage}>Previous</a>
                                    </li>
                                    {
                                          pageNumbers.map((pageNum, index) => (
                                                <li className={"page-item ${currentPage === pageNum ? 'active' : ''}"} key={index}>
                                                      <a className="page-link" href="#" onClick={() => changeCurrentPage(pageNum)}>{pageNum}</a>
                                                </li>
                                          ))
                                    }
                                    <li className="page-item">
                                          <a className="page-link" href="#" onClick={nextPage}>Next</a>
                                    </li>
                              </ul>
                        </nav>  
                  </div>
            </div>
      )

      function prevPage() {

            if (currentPage !== 1) {

                  setCurrentPage(currentPage - 1);
            }
      }

      function changeCurrentPage(id){
            
           setCurrentPage(id); 
      }

      function nextPage() {

            if (currentPage !== npages) {

                  setCurrentPage(currentPage + 1);
            }
      }
}

export default ListTodoComponent
