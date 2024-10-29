import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from '../redux/taskActions';

const TaskForm = ({ currentTask, setCurrentTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentTask) {
      setTitle(currentTask.title);
      setDescription(currentTask.description);
    } else {
      setTitle('');
      setDescription('');
    }
  }, [currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      setError('Both fields are required.');
      return;
    }
    setError('');
    if (currentTask) {
      dispatch(editTask({ ...currentTask, title, description }));
      setCurrentTask(null);
    } else {
      const newTask = {
        id: Date.now(),
        title,
        description,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      dispatch(addTask(newTask));
    }
    setTitle('');
    setDescription('');
  };

  return (
    <form id="app-form" onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}
      <input
        type="text"
        name="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        name="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">{currentTask ? 'Update Task' : 'Add Task'}</button>
      {currentTask && (
        <button type="button" onClick={() => setCurrentTask(null)}>
          Cancel
        </button>
      )}
    </form>
  );
};

export default TaskForm;