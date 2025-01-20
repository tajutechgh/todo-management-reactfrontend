import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { createTodo, getTodoById, updateTodo } from '../services/TodoService';

const TodoComponent = () => {

      const [title, setTitle] = useState('');
      const [description, setDescription] = useState('');
      const [completed, setCompleted] = useState(false);

      const {id} = useParams();

      const [errors, setErrors] = useState({
            title: '',
            description: '',
            completed: ''
      })

      const navigator = useNavigate();

      useEffect(() => {

            if(id){
                  getTodoById(id).then((response) => {

                  setTitle(response.data.title);

                  setDescription(response.data.description);

                  setCompleted(response.data.completed);

                  }).catch(error => {

                        console.error(error);
                  })
            }

      }, [id])

      function saveOrUpdateTodo(event){

            event.preventDefault();
    
            if(validateForm()){
    
                  const todo = {title, description, completed}
      
                  console.log(todo)
      
                  if(id){
      
                        updateTodo(id, todo).then((response) => {
      
                              console.log(response.data);
      
                              navigator('/todos');
      
                        }).catch(error => {
      
                              console.error(error);
                        })
                  } else {
      
                        createTodo(todo).then((response) => {
      
                              console.log(response.data);
      
                              navigator('/todos')
      
                        }).catch(error => {
      
                              console.error(error);
                        })
                  }
            }
      }

      function validateForm(){

            let valid = true;
    
            const errorsCopy = {... errors}
    
            if(title.trim()){
    
                errorsCopy.title = '';
    
            } else {
    
                errorsCopy.title = 'Title is required';
    
                valid = false;
            }
    
            if(description.trim()){
    
                errorsCopy.description = '';
    
            } else {
    
                errorsCopy.description = 'Description is required';
    
                valid = false;
            }
    
            setErrors(errorsCopy);
            
            return valid;
    
      }

      function pageTitle(){

            if(id){
    
                return <h2 className='text-center mt-2'>Update Todo</h2>
    
            }else{
    
                return <h2 className='text-center mt-2'>Add Todo</h2>
            }
      }

      return (
            <div className='container'>
                  <br/> <br/>
                  <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                        {
                              pageTitle()
                        }
                        <div className='card-body'>
                              <form>
                                    <div className='form-group mb-3'>
                                          <label className='form-label'>Todo Title:</label>
                                          <input
                                                type='text'
                                                placeholder='Enter todo title'
                                                name='title'
                                                value={title}
                                                className={`form-control ${ errors.title ? 'is-invalid': '' }`}
                                                onChange={(event) => setTitle(event.target.value)}
                                          >
                                          </input>
                                          { errors.title && <div className='invalid-feedback'> { errors.title} </div> }
                                    </div>

                                    <div className='form-group mb-3'>
                                          <label className='form-label'>Todo Description:</label>
                                          <input
                                                type='text'
                                                placeholder='Enter todo description'
                                                name='description'
                                                value={description}
                                                className={`form-control ${ errors.description ? 'is-invalid': '' }`}
                                                onChange={(event) => setDescription(event.target.value)}
                                          >
                                          </input>
                                          { errors.description && <div className='invalid-feedback'> { errors.description} </div> }
                                    </div>

                                    <div className='form-group mb-3'>
                                          <label className='form-label'>Completed:</label>
                                          <select
                                               className={`form-control`}
                                               value={completed}
                                               onChange={(event) => setCompleted(event.target.value)}
                                          >
                                                <option value='false'>No</option>
                                                <option value='true'>Yes</option>
                                          </select>
                                    </div>

                                    <button className='btn btn-success bi bi-floppy' onClick={saveOrUpdateTodo}> Save</button>
                              </form>

                        </div>
                        </div>

                  </div>

            </div>
      )
}

export default TodoComponent
