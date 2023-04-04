import './TodoListComponent.css';
import { useState } from 'react';
import { retrieveTodoList, sayHello, deleteTodoById } from './api/TodoListService';
import { useAuth } from '../security/AuthContext';

export default function TodoListComponent() {
    const [message, setMessage] = useState("");
    const [todoList, setTodoList] = useState([]);
    const {currentUser} = useAuth();

    function callHelloFromRestApi() {
        sayHello(currentUser).then((response) => {
                setMessage(response.data);
            })
            .catch((error) => {
               console.log(error);
            })
            .finally(() => {
                console.log('do something to clean up...')})
    }

    function getTodoList() {
        retrieveTodoList().then((response) => loadTodoList(response))
            .catch((error) => showError(error));
    }

    function loadTodoList(response) {
        
        setTodoList(response.data);
    }

    function showError(error) {
        setMessage(error.message);
    }

    function deleteTodo(id) {
        deleteTodoById(id)
            .then((response) => { 
                console.log('delte todo ' + id);
                //update list
                getTodoList();
                //show message
                setMessage(`Delete todo item ${id}`);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className="container">
            <div>TodoListComponent</div>
            {
                message && <div className="alert alert-warning">{message}</div>
            }
            
            <div>
                <button id='showTodoListBtn' type='button' className='btn btn-success' onClick={getTodoList}>Show Todo List</button>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>description</th>
                        <th>Status</th>
                        <th>Target Date</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todoList.map(todo => (
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                <td>{todo.status.toString()}</td>
                                <td>{todo.targetDate}</td>
                                <td>
                                    <button className='btn btn-warning' onClick={() => deleteTodo(todo.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>
            <div>
                <button id='callHelloApiBtn' type="button" className="btn btn-success" onClick={callHelloFromRestApi}>Call Hello from REST API</button> 
            </div>

            
        </div>
    )
}