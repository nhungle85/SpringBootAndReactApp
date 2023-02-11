import './TodoListComponent.css';
import { useState } from 'react';
import { retrieveTodoList, sayHello } from './api/TodoListService';

export default function TodoListComponent() {
    const [message, setMessage] = useState("");
    const [todoList, setTodoList] = useState([]);

    function callHelloFromRestApi() {
        sayHello('Nhung123').then((response) => {
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
        console.log(response.data);
        setTodoList(response.data);
    }

    function showError(error) {
        setMessage(error.message);
    }

    return (
        <div className="container">
            <div>TodoListComponent</div>
            <div>
                <button id='showTodoListBtn' type='button' className='btn btn-success' onClick={getTodoList}>Show Todo List</button>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <td>id</td>
                        <td>description</td>
                        <td>Status</td>
                        <td>Target Date</td>
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
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>
            <div>
                <button id='callHelloApiBtn' type="button" className="btn btn-success" onClick={callHelloFromRestApi}>Call Hello from REST API</button>
                <div className="text-info">{message}</div>
            </div>
        </div>
    )
}