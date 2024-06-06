import React, { useState } from "react";
import "./App.css";
import axios from 'axios'
function Create({ setTodos }) {
    const [task, setTask] = useState("");
    const handleAdd = () => {
        axios.post('http://localhost:3001/add', {task: task})
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }
    
    return (
        <div className="create_form">
            <input type="text" name="" id="" placeholder="Enter Task" onChange={(e) => setTask(e.target.value)}/>
            <button type="button" onClick={handleAdd}>Add</button>
        </div>
    );
}

export default Create;