import React, { useState } from 'react'

const ListTodoComponent = () => {

      const dummyTodoList = [
            {
                  id: 1,
                  title: "Buy groceries",
                  description: "Purchase milk, eggs, bread, and vegetables.",
                  completed: false,
            },
            {
                  id: 2,
                  title: "Morning workout",
                  description: "Complete a 30-minute jog and strength training.",
                  completed: true,
            },
            {
                  id: 3,
                  title: "Finish project report",
                  description: "Write and submit the project report for the client.",
                  completed: false,
            },
            {
                  id: 4,
                  title: "Call parents",
                  description: "Have a catch-up call with parents in the evening.",
                  completed: true,
            },
            {
                  id: 5,
                  title: "Schedule dentist appointment",
                  description: "Book an appointment for the next week.",
                  completed: false,
            },
            {
                  id: 6,
                  title: "Pay electricity bill",
                  description: "Pay the bill online before the due date.",
                  completed: true,
            },
            {
                  id: 7,
                  title: "Read a book",
                  description: "Read two chapters of 'Atomic Habits.'",
                  completed: false,
            },
            {
                  id: 8,
                  title: "Clean the house",
                  description: "Vacuum and mop the floors, and tidy up the rooms.",
                  completed: false,
            },
            {
                  id: 9,
                  title: "Plan weekend trip",
                  description: "Research destinations and book accommodations.",
                  completed: false,
            },
            {
                  id: 10,
                  title: "Organize files",
                  description: "Sort and back up important documents.",
                  completed: true,
            },
      ];

      const [todos, setTodos] = useState(dummyTodoList);

      return (
            <div className='container'>
                  <h2 className='text-center mb-3 mt-3'>Todo List</h2>
                  <div>
                        <table className="table table-striped">
                              <thead>
                                    <tr>
                                          <th scope="col">#</th>
                                          <th scope="col">Todo Title</th>
                                          <th scope="col">Todo Description</th>
                                          <th scope="col">Completed</th>
                                          <th scope="col">Action</th>
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
                                                      <td>@action</td>
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
