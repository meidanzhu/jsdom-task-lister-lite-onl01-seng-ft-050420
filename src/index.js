
document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById('create-task-form');
  let task = document.getElementById('new-task-description');
  let ul = document.getElementById('tasks');

  form.addEventListener('submit', function(e) {
    e.preventDefault()
    if (task.value) {
      ul.innerHTML += `<li>${task.value}</li>`
      task.value = ''
    }
  });
});
