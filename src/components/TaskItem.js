import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleStatus } from '../redux/taskActions';

const TaskItem = ({ task, setCurrentTask }) => {
  const dispatch = useDispatch();

  const taskStyle = {
    color: task.completed ? 'green' : 'red',
  };

  return (
    <div className="task-item" style={taskStyle}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
      <p>Created At: {new Date(task.createdAt).toLocaleString()}</p>
      <div className="task-buttons">
      <button onClick={() => dispatch(toggleStatus(task.id))}>
        Toggle Status
      </button>
      <button onClick={() => setCurrentTask(task)}>Edit</button>
      <button className="delete-button" onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;