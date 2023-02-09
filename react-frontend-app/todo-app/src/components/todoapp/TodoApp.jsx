import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "../login/LoginForm";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";
import TodoListComponent from "./TodoListComponent";

export default function TodoApp() {
    return(
        <div className="TodoApp">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginForm/>} />
                    <Route path='/login' element={<LoginForm/>} />
                    <Route path='/welcome/:username' element={<HomePage />} />
                    <Route path='/welcome' element={<HomePage />} />
                    <Route path='/todo' element={<TodoListComponent />} />

                    <Route path='*' element={<ErrorPage/>} />
                </Routes>
            </BrowserRouter>
           
        </div>
    )
}