import React, { useState } from "react";
import "./ToDoListBlock.scss";
import BlockHeader from "./BlockHeader";
import Checkbox from "../common/Checkbox";

const ToDoListBlock = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState("");

  const addTask = () => {
    const localTasks = JSON.parse(JSON.stringify(tasks));
    localTasks.unshift({ name: currentTask, completed: false });
    setTasks(localTasks);
    setCurrentTask("");
  };

  const setCompleted = (index) => {
    const localTasks = JSON.parse(JSON.stringify(tasks));
    localTasks[index].completed = !localTasks[index].completed;
    setTasks(localTasks);
  };

  const generateToDoList = () => {
    return tasks.map((task, i) => (
      <Checkbox label={task.name} index={i} checked={task.completed} setCompleted={setCompleted} />
    ));
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
