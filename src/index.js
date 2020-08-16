document.addEventListener("DOMContentLoaded", () => {
  let form = document.queryElementById('#create-task-form')
  let description = document.ElementById('#new-task-description')
  let todoList = document.getElementById('tasks')

  form.addEventListener("submit", function(event){
    event.preventDefault()
    if (description.value){
        todoList.innerHTML += `<li> ${description.value} </li>`
        description.value = ''
      }

})
