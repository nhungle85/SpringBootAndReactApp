import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "../login/LoginForm";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";

export default function TodoApp() {
    return(
        <div className="TodoApp">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginForm/>} />
                    <Route path='/login' element={<LoginForm/>} />
                    <Route path='/welcome' element={<HomePage />} />
                    <Route path='*' element={<ErrorPage/>} />
                </Routes>
            </BrowserRouter>
           
        </div>
    )
}