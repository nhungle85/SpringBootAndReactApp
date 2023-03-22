import './Content.css';
import {Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from "../Login/LoginForm";
import Logout from "../Logout/Logout";
import ErrorPage from "../Error/ErrorPage";
import HomePage from "../Home/HomePage";
import TodoListComponent from "../TodoApp/TodoListComponent";
import { useAuth } from '../security/AuthContext';

function AuthenticateRoute ({children}) {
    const {currentUser, isAuthenticated} = useAuth();
    console.log(`Content page, current user: ${currentUser}`);
    if (isAuthenticated) {
        return children;
    }
    return <Navigate to="/login"></Navigate>
   
}

const Content = (props) => {
    return (
        <div className="content__container container">
            <Routes>
                <Route path='/' element={<LoginForm/>} />
                <Route path='/login' element={<LoginForm/>} />
                <Route path='/welcome/:username' element={<HomePage />} />
                <Route path='/welcome' element={<HomePage />} />

                <Route path='/todo' element={
                    <AuthenticateRoute>
                        <TodoListComponent />
                    </AuthenticateRoute>
                } />

                <Route path='/logout' element={
                    <AuthenticateRoute>
                        <Logout />
                    </AuthenticateRoute>
                } />

                <Route path='*' element={<ErrorPage/>} />
            </Routes>
        </div>
    )
};

export default Content;