const clearCompleted = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  let newtask = tasks.filter((task) => task.completed === false);
  let counter = 1;
  newtask = newtask.map((task) => {
    task.index = counter;
    counter += 1;
    return task;
  });
  window.location.reload();
  localStorage.setItem('tasks', JSON.stringify(newtask));
};
export default clearCompleted;
