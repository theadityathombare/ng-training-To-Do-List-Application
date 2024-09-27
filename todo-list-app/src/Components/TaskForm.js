
import React, { useState, useEffect } from 'react';

const TaskForm = ({ onSave, taskToEdit }) => {
  const [title, setTitle] = useState('');
  const [assignedTo, setAssignedTo] = useState(''); 
  const [status, setStatus] = useState(''); 
  const [dueDate, setDueDate] = useState(''); 
  const [priority, setPriority] = useState(''); 
  const [comments, setComments] = useState(''); 

  // Populate the form when taskToEdit changes
  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title || '');
      setAssignedTo(taskToEdit.assignedTo || '');
      setStatus(taskToEdit.status || '');
      setDueDate(taskToEdit.dueDate || '');
      setPriority(taskToEdit.priority || '');
      setComments(taskToEdit.comments || '');
    } else {
      resetForm(); // Reset the form when no taskToEdit is passed
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      const newTask = {
        title,
        assignedTo,
        status,
        dueDate,
        priority,
        comments,
        id: taskToEdit ? taskToEdit.id : Date.now(), // Reuse the ID for edit
      };
      onSave(newTask);
      resetForm(); // Reset the form after submission
    }
  };

  const resetForm = () => {
    setTitle('');
    setAssignedTo('');
    setStatus('');
    setDueDate('');
    setPriority('');
    setComments('');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={styles.input}
      />

      <select value={assignedTo} onChange={(e) => setAssignedTo(e.target.value)} required style={styles.select}>
        <option value="">Assigned To</option>
        <option value="User 1">User 1</option>
        <option value="User 2">User 2</option>
        <option value="User 3">User 3</option>
        <option value="User 4">User 4</option>
      </select>

      <input
        type="text"
        placeholder="Status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        required
        style={styles.input}
      />

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
        style={styles.input}
      />

      <select value={priority} onChange={(e) => setPriority(e.target.value)} required style={styles.select}>
        <option value="">Priority</option>
        <option value="Low">Low</option>
        <option value="Normal">Normal</option>
        <option value="High">High</option>
      </select>

      <textarea
        placeholder="Comments"
        value={comments}
        onChange={(e) => setComments(e.target.value)}
        style={styles.textarea}
      />

      <button type="submit" style={styles.button}>
        {taskToEdit ? 'Update' : 'Add'} Task
      </button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  select: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
    minHeight: '80px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: 'orange',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default TaskForm;
