import {
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  UPDATE_STORAGE
} from '../../types';

export const crearTareaAction = (tarea) => {
  return (dispatch) => {
    dispatch( agregarTarea(tarea) );
    dispatch( actualizarStorage() );
  }
}

const agregarTarea = (tarea) => {
  return {
    type: ADD_TASK,
    payload: tarea
  }
}

export const eliminarTareaAction = (id) => {
  return (dispatch) => {
    dispatch( eliminarTarea(id) );
    dispatch( actualizarStorage() );
  }
}

const eliminarTarea = (id) => {
  return {
    type: DELETE_TASK,
    payload: id
  }
}

export const actualizarTareaAction = (task) => {
  return (dispatch) => {
    dispatch( actualizarTarea(task) );
    dispatch( actualizarStorage() );
  }
}

const actualizarTarea = (task) => {
  return {
    type: UPDATE_TASK,
    payload: task
  }
}

const actualizarStorage = () => {
  return {
    type: UPDATE_STORAGE
  }
}