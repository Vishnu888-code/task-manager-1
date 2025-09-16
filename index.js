document.getElementById('addBtn').addEventListener('click', addTask);
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
  const title = taskInput.value.trim();
  if (title === '') {
    alert('Please enter a task.');
    return;
  }
  const li = createTaskElement(title);
  taskList.appendChild(li);
  taskInput.value = '';
}

function createTaskElement(title, completed = false) {
  const li = document.createElement('li');
  if (completed) li.classList.add('completed');

  const taskText = document.createElement('span');
  taskText.className = 'task-text';
  taskText.textContent = title;
  li.appendChild(taskText);

  const buttonsDiv = document.createElement('div');
  buttonsDiv.className = 'task-buttons';

  const completeBtn = document.createElement('button');
  completeBtn.className = 'complete-btn';
  completeBtn.textContent = completed ? 'Undo' : 'Complete';
  completeBtn.onclick = () => toggleComplete(li, completeBtn);
  buttonsDiv.appendChild(completeBtn);

  const editBtn = document.createElement('button');
  editBtn.className = 'edit-btn';
  editBtn.textContent = 'Edit';
  editBtn.onclick = () => editTask(li, taskText);
  buttonsDiv.appendChild(editBtn);

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = 'Delete';
  deleteBtn.onclick = () => deleteTask(li);
  buttonsDiv.appendChild(deleteBtn);

  li.appendChild(buttonsDiv);

  return li;
}

function toggleComplete(li, button) {
  li.classList.toggle('completed');
  button.textContent = li.classList.contains('completed') ? 'Undo' : 'Complete';
}

function editTask(li, taskText) {
  const currentText = taskText.textContent;
  const newText = prompt('Edit task:', currentText);
  if (newText !== null && newText.trim() !== '') {
    taskText.textContent = newText.trim();
  }
}

function deleteTask(li) {
  if (confirm('Delete this task?')) {
    li.remove();
  }
}
