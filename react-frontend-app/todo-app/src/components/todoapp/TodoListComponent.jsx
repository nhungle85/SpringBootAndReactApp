import './TodoListComponent.css';
import axios from 'axios';
import { useState } from 'react';

export default function TodoListComponent() {
    const today = new Date();
    const targetDate = new Date(today.getFullYear() + 2, today.getMonth(), today.getDay());
    const [message, setMessage] = useState("");
    const [todoList, setTodoList] = useState([]);


    // const todoList = [
    //     {id: 1, description : "Learning React", doneStatus: false, endDate: targetDate},
    //     {id: 2, description : "Learning Bootstrap", doneStatus: false, endDate: targetDate},
    //     {id: 3, description : "Learning SpringBoot", doneStatus: false, endDate: targetDate},
    //     {id: 4, description : "Learning Spring Cloud", doneStatus: false, endDate: targetDate},
    //     {id: 5, description : "Learning Spring Security", doneStatus: false, endDate: targetDate}
    // ];

    function callHelloFromRestApi() {
        console.log('call backend api');
        axios.get('http://localhost:8585/todo/sayHello/Nhung') //will return a promise
            //if sucesss
            .then((response) => {
                console.log(response.data);
            })
            //catch if error
            .catch((error) => {
               // setMessage(error);
               console.log(error);
            })
            .finally(() => {
                console.log('do something to clean up...')})
    }

    function getTodoList() {
        console.log('call get all todo list api');
        axios.get('http://localhost:8585/todo/getAll')
            .then((response) => loadTodoList(response))
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