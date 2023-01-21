import {
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  UPDATE_STORAGE
} from '../../types';

import { actualizarStorage } from '../../helpers/tasks.helper';

const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || []
}

const tasksReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      }
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      }
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => task.id === action.payload.id? task = action.payload : task)
      }
    case UPDATE_STORAGE:
      actualizarStorage(state.tasks);
      return {
        ...state
      }
    default:
      return {
        ...state
      }
  }
}

export default tasksReducer;