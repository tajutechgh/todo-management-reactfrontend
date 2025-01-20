import './App.css'
import HeaderComponent from './components/HeaderComponent'
import ListTodoComponent from './components/ListTodoComponent'
import FooterComponent from './components/FooterComponent'
import TodoComponent  from './components/TodoComponent'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import RegisterComponent from './components/RegisterComponent'
import LoginComponent from './components/LoginComponent'
import { isUserLoggedIn } from './services/AuthService'

function App() {

  function AuthenticatedRoute({children}){

    const isAuth = isUserLoggedIn();

    if(isAuth) {

      return children;
    }

    return <Navigate to="/" />

  }

  return (
    <div>
      <BrowserRouter>
        <HeaderComponent/>
        <Routes>
            {/* // http://localhost:3000 */}
            <Route path="/" element={<LoginComponent/>}></Route>
            {/* // http://localhost:3000/todos */}
            <Route path='/todos' element ={
              <AuthenticatedRoute>
                <ListTodoComponent/>
              </AuthenticatedRoute>
            }></Route>
            {/* // http://localhost:3000/add-todo */}
            <Route path='/add-todo' element = {
              <AuthenticatedRoute>
                <TodoComponent/>
              </AuthenticatedRoute>
            }></Route>
            {/* // http://localhost:3000/edit-todo/1 */}
            <Route path='/edit-todo/:id' element = {
              <AuthenticatedRoute>
                <TodoComponent/>
              </AuthenticatedRoute>
            }></Route>
            {/* // http://localhost:3000/register */}
            <Route path='/register' element = {<RegisterComponent/>}></Route>
            {/* // http://localhost:3000/login */}
            <Route path='/login' element = {<LoginComponent/>}></Route>
        </Routes>
        <FooterComponent/>
      </BrowserRouter>
    </div>
  )
}

export default App
