import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.css";

import TaskInput from "./components/TaskInput";
import TaskTable from "./components/TaskTable";

export default function App() {
  const [tasks, setTasks] = useState([]);

  function onTaskCreated(task) {
    // console.log('onTaskCreated', task)
    const newTasks = [];
    for (let t of tasks) {
      newTasks.push(t);
    }
    newTasks.push(task);

    setTasks(newTasks);
  }

  function onTaskUpdated(task) {
    const updatedTasks = tasks.map((t) => {
      if (t.id === tasks.id) {
        return task;
      } else {
        return t;
      }
    });
    setTasks(updatedTasks);
  }

  function onTaskRemove(task) {
    const filteredTasks = tasks.filter((t) => {
      return t.id !== task.id;
    });
    setTasks(filteredTasks);
  }

  return (
    <div className="container mt-5">
      <div className="card card-body text-center">
        <h1>Task List</h1>
        <hr></hr>
        <h6> Our Simple Task List</h6>

        <TaskInput onTaskCreated={onTaskCreated}></TaskInput>

        <TaskTable
          tasks={tasks}
          onTaskRemove={onTaskRemove}
          onTaskUpdated={onTaskUpdated}
        ></TaskTable>
      </div>
    </div>
  );
}
