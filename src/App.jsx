import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TaskForm from './components/TaskForm';
import TasksList from './components/TasksList';

const App = () => {
  return (  
    <div className='bg-zinc-900 text-white'>
      <div className="flex items-center justify-center min-h-screen py-4">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<TasksList/>}/>
            <Route path='/create-task' element={<TaskForm/>}/>
            <Route path='/edit-task/:id' element={<TaskForm/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
 
export default App;