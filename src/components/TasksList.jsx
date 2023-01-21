import { useSelector, useDispatch } from 'react-redux';
import { eliminarTareaAction } from '../redux/actions/tasks.actions';
import { Link } from 'react-router-dom';

const TasksList = () => {

  // const tasks = useSelector(state => state.tasks.tasks);

  const tasks = [
    {
      title: 'tarea 6',
      description: 'taxxxxx',
      id: '6894ee2b-5f16-41d8-9bfb-a9ff382809d8'
    },
    {
      title: 'Tarea 2',
      description: 'lol',
      id: '98f1f367-e0d1-431a-80c1-61015426a87a'
    }
  ]

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(eliminarTareaAction(id));
  }

  return (  
    <div className='w-4/6'>
      <header className='flex justify-between items-center py-4'>
        <h1>Number of tasks: {tasks.length}</h1>
        <Link 
          className='bg-indigo-600 px-2 py-1 rounded-sm text-sm'
          to='/create-task'
        >Create Task</Link>
      </header>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {tasks.map( task => {
          return (
            <div 
              className='bg-neutral-800 p-4 rounded-md flex flex-col gap-y-2'
              key={task.id}
            >
              <header className='flex justify-between'>
                <h3>{task.title}</h3>
                <div className='flex gap-x-2'>
                  <Link 
                    className='bg-zinc-600 px-2 py-1 text-xs rounded-md'
                    to={`/edit-task/${task.id}`}
                  >Editar</Link>
                  <button
                    className='bg-red-500 px-2 py-1 text-xs rounded-md'
                    onClick={() => handleDelete(task.id)}
                  >Delete</button>
                </div>
              </header>
              <p>{task.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}
 
export default TasksList;