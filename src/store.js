import { configureStore } from '@reduxjs/toolkit';

import tasksReducer from './redux/reducer/tasks.reducer';

const store = configureStore({
  reducer: {
    tasks: tasksReducer
  }
})

export default store;