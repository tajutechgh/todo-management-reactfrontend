import './App.css'
import HeaderComponent from './components/HeaderComponent'
import ListTodoComponent from './components/ListTodoComponent'
import FooterComponent from './components/FooterComponent'
import TodoComponent  from './components/TodoComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent/>
        <Routes>
            {/* // http://localhost:3000 */}
            <Route path="/" element={<ListTodoComponent/>}></Route>
            {/* // http://localhost:3000/todos */}
            <Route path='/todos' element ={<ListTodoComponent/>}></Route>
            {/* // http://localhost:3000/add-todo */}
            <Route path='/add-todo' element = {<TodoComponent/>}></Route>
            {/* // http://localhost:3000/edit-employee/1 */}
            <Route path='/edit-todo/:id' element = {<TodoComponent/>}></Route>
        </Routes>
        <FooterComponent/>
      </BrowserRouter>
    </div>
  )
}

export default App
