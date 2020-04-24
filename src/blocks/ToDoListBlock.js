import React, { useState } from "react";
import "./ToDoListBlock.scss";
import BlockHeader from "./BlockHeader";
import Checkbox from "../common/Checkbox";
import { useLocalStorage } from "../common/customHooks";

const ToDoListBlock = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [currentTask, setCurrentTask] = useState("");

  const addTask = () => {
    const localTasks = JSON.parse(JSON.stringify(tasks));
    if (localTasks.length < 5 && currentTask) {
      localTasks.unshift({ name: currentTask, completed: false });
      setTasks(localTasks);
      setCurrentTask("");
    }
  };

  const setCompleted = (index) => {
    const localTasks = JSON.parse(JSON.stringify(tasks));
    localTasks[index].completed = !localTasks[index].completed;
    setTasks(localTasks);
  };

  const deleteTask = (index) => {
    const localTasks = JSON.parse(JSON.stringify(tasks));
    localTasks.splice(index, 1);
    setTasks(localTasks);
    // This is doing some weird shit with which item is checked
  };

  const generateToDoList = () => {
    return tasks.map((task, i) => (
      <Checkbox
        label={task.name}
        index={i}
        checked={task.completed}
        setCompleted={setCompleted}
        deleteTask={deleteTask}
      />
    ));
  };

  return (
    <div className="todo-list-container">
      <div className="todo-list-header">What's on for today?</div>
      <div className="todo-list-body">
        <div className="input-box">
          <input
            type="text"
            className="todo-input"
            value={currentTask}
            onChange={(e) => setCurrentTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
          />
        </div>
        <div className="checkbox-list">{generateToDoList(tasks)}</div>
      </div>
    </div>
  );
};

export default ToDoListBlock;
