import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';

import { crearTareaAction, actualizarTareaAction } from '../redux/actions/tasks.actions';

const TaskForm = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const params = useParams();

  const tasks = useSelector(state => state.tasks.tasks);

  const [ task, setTask ] = useState({
    title: '',
    description: ''
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(params.id) {
      dispatch(actualizarTareaAction(task));
    } else {
      dispatch(crearTareaAction({
        ...task,
        id: uuid()
      }));
    }

    navigate('/')
  }

  useEffect(() => {
    if(params.id) {
      setTask(tasks.find(task => task.id === params.id))
    }
  }, [params.id, tasks]);

  return (  
    <form
      className='bg-zinc-800 max-w-sm p-4'
      onSubmit={handleSubmit}
    > 
      <label 
        className='block text-sm font-bold mb-2'
        htmlFor='title'
      >Task: </label>
      <input 
        className='w-full p-2 rounded-md bg-zinc-600 mb-2 outline-none'
        type='text' 
        placeholder='title'
        name='title'
        onChange={handleChange} 
        value={task.title}
      />
      <label 
        className='block text-sm font-bold mb-2'
        htmlFor='description'
      >Description: </label>
      <textarea 
        className='w-full p-2 rounded-md bg-zinc-600 mb-2 outline-none'
        placeholder='description'
        name='description' 
        onChange={handleChange}
        value={task.description}
      />
      <button
        className='bg-indigo-600 px-2 py-1 w-full rounded-md hover:bg-indigo-700'
      >Save</button>
    </form>
  );
}
 
export default TaskForm;