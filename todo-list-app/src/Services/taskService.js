let tasks = [
    { id: 1, title: 'Learn React' },
    { id: 2, title: 'Build a To-Do App' },
  ];
  
  // Simulate API calls using Promise
  export const getTasks = () => {
    return Promise.resolve(tasks);
  };
  
  export const addTask = (task) => {
    tasks.push(task);
    return Promise.resolve(task);
  };
  
  export const updateTask = (updatedTask) => {
    tasks = tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task));
    return Promise.resolve(updatedTask);
  };
  
  export const deleteTask = (id) => {
    tasks = tasks.filter((task) => task.id !== id);
    return Promise.resolve();
  };
  