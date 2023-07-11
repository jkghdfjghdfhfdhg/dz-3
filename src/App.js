import './App.css';

import React, { useState } from "react";


const TodoList = (props) => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  return (
    <div className="todo-list">
      <h1>Todo List  {props.project}</h1>
      <div className="task-input">
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;