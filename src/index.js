document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newForm = document.querySelector('form')
  const userInput = document.getElementById("new-task-description")
  const newTasks = document.getElementById("tasks")

  function addTask(){
    const li = document.createElement('li')
    li.textContent = userInput.value 
    newTasks.appendChild(li)
  }

  newForm.addEventListener("submit", (e) => {
    e.preventDefault()
    addTask()
  })

});
