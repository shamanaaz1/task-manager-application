import React from 'react';
import { useSelector } from 'react-redux';
import { selectSortedTasks } from '../redux/selectors';
import TaskItem from './TaskItem';

const TaskList = ({ setCurrentTask }) => {
  const tasks = useSelector(selectSortedTasks);

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} setCurrentTask={setCurrentTask} />
      ))}
    </div>
  );
};

export default TaskList;