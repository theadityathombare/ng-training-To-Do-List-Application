 import './App.css';


import React, { useState, useEffect } from 'react';
import TaskList from './Components/TaskList';
import TaskForm from './Components/TaskForm';
import { getTasks, addTask, updateTask, deleteTask } from './Services/taskService';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    // Fetch tasks on load
    getTasks().then(setTasks);
  }, []);

  const handleSaveTask = (task) => {
    if (taskToEdit) {
      updateTask(task).then(() => {
        setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
        setTaskToEdit(null);
      });
    } else {
      addTask(task).then((newTask) => {
        setTasks([...tasks, newTask]);
      });
    }
  };

  const handleDeleteTask = (id) => {
    deleteTask(id).then(() => {
      setTasks(tasks.filter((task) => task.id !== id));
    });
  };

  const handleEditTask = (task) => {
    setTaskToEdit(task);
  };

  return (
    <div className="App">
      <h1 style={{color:'orange'}}>To-Do List App</h1>
      <TaskForm onSave={handleSaveTask} taskToEdit={taskToEdit} />
      <TaskList tasks={tasks} onDelete={handleDeleteTask} onEdit={handleEditTask} />
    </div>
  );
}

export default App;
