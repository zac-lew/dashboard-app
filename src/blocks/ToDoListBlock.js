import React, { useState } from "react";
import "./ToDoListBlock.scss";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";

import BlockHeader from "./BlockHeader";

const ToDoListBlock = ({ weather }) => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState("");

  const addTask = () => {
    const localTasks = JSON.parse(JSON.stringify(tasks));
    localTasks.unshift({ name: currentTask, completed: false });
    setTasks(localTasks);
    setCurrentTask("");
  };

  const generateToDoList = () => {
    return tasks.map((task, i) => (
      <div onClick={() => setCompleted(i)} className={task.completed ? "task completed" : "task"}>
        {task.name}
      </div>
    ));
  };

  const setCompleted = (index) => {
    const localTasks = JSON.parse(JSON.stringify(tasks));
    localTasks[index].completed = !localTasks[index].completed;
    setTasks(localTasks);
  };

  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <div className="todo-list-container">
      <BlockHeader header="To-Do List" />
      <div className="todo-list-body">
        <div className="input-box">
          <input
            type="text"
            className="todo-input"
            value={currentTask}
            onChange={(e) => setCurrentTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
          />
          <button className="add-todo-button" onClick={addTask}>
            Add
          </button>
        </div>
        <div className="checkbox-list">{generateToDoList(tasks)}</div>
        <button onClick={clearTasks}>Clear</button>
      </div>
    </div>
  );
};

export default ToDoListBlock;
