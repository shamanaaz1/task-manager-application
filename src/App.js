import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  const [currentTask, setCurrentTask] = useState(null);

  return (
    <Provider store={store}>
      <div className="container">
        <h1>Task Manager</h1>
        <TaskForm currentTask={currentTask} setCurrentTask={setCurrentTask} />
        <TaskList setCurrentTask={setCurrentTask} />
      </div>
    </Provider>
  );
};

export default App;