
  import React from 'react';

const TaskList = ({ tasks, onEdit, onDelete }) => {
  return (
    <div>
      <h2 style={styles.heading}>Task List</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={{color:'orange'}}>Title</th>
            <th style={{color:'orange'}}>Assigned To</th>
            <th style={{color:'orange'}}> Status</th>
            <th style={{color:'orange'}}>Due Date</th>
            <th style={{color:'orange'}}>Priority</th>
            <th style={{color:'orange'}}>Comments</th>
            <th style={{color:'orange'}}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id} style={styles.tableRow}>
              <td style={{ color: '#007BFF' }}>{task.title}</td>
              <td>{task.assignedTo}</td>
              <td>{task.status}</td>
              <td>{task.dueDate}</td>
              <td>{task.priority}</td>
              <td>{task.comments}</td>
              <td>
                <div>
                  <button style={styles.button} onClick={() => onEdit(task)}>Edit</button>
                  <button style={styles.button} onClick={() => onDelete(task.id)}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  heading: { textAlign: 'center', fontSize: '24px', marginBottom: '20px',color:'orange' },
  table: { width: '100%', borderCollapse: 'collapse', margin: '0 auto' },
  tableRow: { textAlign: 'left', borderBottom: '1px solid #ddd' },
  th: { padding: '10px', borderBottom: '2px solid #ccc', backgroundColor: '#f2f2f2', textAlign: 'left' },
  td: { padding: '10px', textAlign: 'center' }, // Aligning the content in center
  button: { marginRight: '5px', backgroundColor: 'orange', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer', borderRadius: '4px' },
};

export default TaskList;
