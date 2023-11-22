function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
  
    if (taskInput.value !== '') {
      var newTask = document.createElement('li');
      newTask.innerHTML = `
        <span>${taskInput.value}</span>
        <button onclick="editTask(this)">Editar</button>
        <button onclick="deleteTask(this)">Apagar</button>
      `;
      taskList.appendChild(newTask);
      taskInput.value = '';
    }
  }
  
  function editTask(button) {
    var newTask = prompt('Editar tarefa:', button.previousElementSibling.textContent);
  
    if (newTask !== null) {
      button.previousElementSibling.textContent = newTask;
    }
  }
  
  function deleteTask(button) {
    var task = button.parentNode;
    task.parentNode.removeChild(task);
  }
  
  function taskListClick(event) {
    var target = event.target;
    if (target.tagName === 'SPAN') {
      var newTask = prompt('Editar tarefa:', target.textContent);
  
      if (newTask !== null) {
        target.textContent = newTask;
      }
    }
  }