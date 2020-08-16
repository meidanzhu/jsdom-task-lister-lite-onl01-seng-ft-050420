document.addEventListener("DOMContentLoaded", () => {
  const form = document.queryElementById('create-task-form')
  const description = document.ElementById('new-task-description')
  const todoList = document.getElementById('tasks')

  form.addEventListener("submit", function(event){
    event.preventDefault()
    if (description.value){
        todoList.innerHTML += `<li> ${description.value} </li>`
        description.value = ''
      }
})
