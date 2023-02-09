import './TodoListComponent.css';
import { Fragment } from "react";

export default function TodoListComponent() {
    const today = new Date();
    const targetDate = new Date(today.getFullYear() + 2, today.getMonth(), today.getDay());

    const todoList = [
        {id: 1, description : "Learning React", doneStatus: false, endDate: targetDate},
        {id: 2, description : "Learning Bootstrap", doneStatus: false, endDate: targetDate},
        {id: 3, description : "Learning SpringBoot", doneStatus: false, endDate: targetDate},
        {id: 4, description : "Learning Spring Cloud", doneStatus: false, endDate: targetDate},
        {id: 5, description : "Learning Spring Security", doneStatus: false, endDate: targetDate}
    ];

    return (
        <Fragment>
            <div>TodoListComponent</div>
            <table className="TodoTbl">
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
                                <td>{todo.doneStatus.toString()}</td>
                                <td>{todo.endDate.toDateString()}</td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>
        </Fragment>
    )
}