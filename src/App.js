import "./App.css";
import React, { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleInputChange(event) {
    const newValue = event.target.value;
    setInput(newValue);
  }

  function handleAddTask() {
    const newTask = {
      text: input,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setInput("");
  }

  function toggleTask(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  }

  function handleDelete(index) {
    const updatedTasks = tasks.filter(function (task, i) {
      return i !== index;
    });
    setTasks(updatedTasks);
  }

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyDown={function (event) {
          if (event.key === "Enter") {
            handleAddTask();
          }
        }}
        placeholder="Add a new task"
      />

      <button onClick={handleAddTask}>Add task</button>

      <ul>
        {tasks.map(function (task, index) {
          return (
            <li key={index}>
              <div className="task-content">
                <label>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={function () {
                      toggleTask(index);
                    }}
                  />
                  {task.text}
                </label>

                <button
                  className="deleteButton"
                  onClick={function () {
                    handleDelete(index);
                  }}
                  aria-label={`Delete task:${task.text}`}
                >
                  <faTrash />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
