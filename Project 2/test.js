function renderTodo() {
  todoHTML = '';
  todo.forEach((taskItem, index) => {
    const { task, date } = taskItem;
    const html = 
    `<p class="todo-list-css">
      ${task} ${date} 
      <button class="js-delete-button delete-button">Delete</button>
      <i class="fa-regular fa-bell bell-icon"></i>
    </p>`;
    todoHTML += html;
  });

  document.querySelector('.js-todolist').innerHTML = todoHTML;

  // Add click event listeners to all bell icons
  document.querySelectorAll('.bell-icon').forEach((bellIcon, index) => {
    bellIcon.addEventListener('click', () => {
      changeImage(bellIcon);
    });
  });
}

function changeImage(bellIcon) {
  bellIcon.classList.remove('fa-regular');
  bellIcon.classList.add('fa-solid');
}

// Call renderTodo to display tasks
renderTodo();
