import React, { useState, useEffect } from "react";
import axios from "axios";
import Create from "./Create.jsx";
import "./App.css";

function Home() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/get')
            .then(result => setTodos(result.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (id) => {
        axios.post('http://localhost:3001/delete', { id })
            .then(result => {
                setTodos(todos.filter(todo => todo._id !== id));
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="home">
        <h2>TODO LIST</h2>
            <Create setTodos={setTodos} />
            {todos.length === 0
                ? <div><h2>No Record</h2></div>
                : todos.map(todo => (
                    <div className="task" key={todo._id}>
                        <input type="checkbox" className="checkbox" />
                        <span>{todo.task}</span>
                        <button className="delete-button" onClick={() => handleDelete(todo._id)}>Delete</button>
                    </div>
                ))
            }
        </div>
    );
}

export default Home;
