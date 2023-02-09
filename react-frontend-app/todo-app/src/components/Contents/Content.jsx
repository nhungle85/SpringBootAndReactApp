import './Content.css';
import {Routes, Route } from 'react-router-dom';
import LoginForm from "../Login/LoginForm";
import Logout from "../Logout/Logout";
import ErrorPage from "../Error/ErrorPage";
import HomePage from "../Home/HomePage";
import TodoListComponent from "../TodoApp/TodoListComponent";

const Content = (props) => {
    return (
        <div className="content__container">
            <Routes>
                <Route path='/' element={<LoginForm/>} />
                <Route path='/login' element={<LoginForm/>} />
                <Route path='/welcome/:username' element={<HomePage />} />
                <Route path='/welcome' element={<HomePage />} />
                <Route path='/todo' element={<TodoListComponent />} />
                <Route path='/logout' element={<Logout />} />

                <Route path='*' element={<ErrorPage/>} />
            </Routes>
        </div>
    )
};

export default Content;