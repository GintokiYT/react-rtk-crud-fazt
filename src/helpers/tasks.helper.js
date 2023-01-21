export const actualizarStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}