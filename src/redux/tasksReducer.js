const initialState = {
    tasks: [],
  };
  
  const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        const addedTasks = [...state.tasks, action.payload];
        localStorage.setItem('tasks', JSON.stringify(addedTasks));
        return { ...state, tasks: addedTasks };
      case 'EDIT_TASK':
        const editedTasks = state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        );
        localStorage.setItem('tasks', JSON.stringify(editedTasks));
        return { ...state, tasks: editedTasks };
      case 'DELETE_TASK':
        const filteredTasks = state.tasks.filter((task) => task.id !== action.payload);
        localStorage.setItem('tasks', JSON.stringify(filteredTasks));
        return { ...state, tasks: filteredTasks };
      case 'TOGGLE_STATUS':
        const toggledTasks = state.tasks.map((task) =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        );
        localStorage.setItem('tasks', JSON.stringify(toggledTasks));
        return { ...state, tasks: toggledTasks };
      default:
        return state;
    }
  };
  
  export default tasksReducer;