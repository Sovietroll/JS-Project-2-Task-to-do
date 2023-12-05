let todo = JSON.parse(localStorage.getItem('todo')) || [];

let todoHTML = '';

const currentDate = new Date().toLocaleDateString('en-US', {
  weekday: 'short',
  year: '2-digit',
  month: '2-digit',
  day: '2-digit'
});

document.getElementById("dateHere")
  .innerHTML = `Today date is ${currentDate}`; //Date

function notiTodo() {
  const formattedToday = today.toLocaleDateString('en-US', {
    weekday: 'short',
    year: '2-digit',
    month: '2-digit',
    day: '2-digit'
  });

  if (formattedToday === currentDate) {
    alert('REMINDER');
  }
  else {
    console.log(currentDate)
  }
}

function renderTodo() {
todoHTML = '';
todo.forEach((taskItem,index) => {

  const {task, date} = taskItem;

  const html = 
  `<p class="todo-list-css">
  ${task} ${date} 
  <button class="js-delete-button delete-button">Delete</button>
  <i class="fa-regular fa-bell bell-icon"></i>
  <input type="checkbox" class="js-checkbox css-checkbox">
  </p>`;

  todoHTML += html; 
})

document.querySelectorAll('.js-checkbox').forEach((check,index) => {
  check.addEventListener('change', () => {
    checkBoxMark(check, index);
  })
})

function checkBoxMark(checkbox, index){

  if (!checkbox.checked) {
    todo.splice(index, 1);
    renderTodo();
    savedLocal()
  }
  }


document.querySelector('.js-todolist')
  .innerHTML = todoHTML;

document.querySelectorAll('.bell-icon').forEach((bellIcon, index) => {
  bellIcon.addEventListener('click', () => {
    changeImage(bellIcon);
  })
});

let bellNoti = false;
function changeImage(bellIcon) {
  
  if (!bellNoti) {
  bellIcon.classList.remove('fa-regular');
  bellIcon.classList.add('fa-solid','fa-shake');
  setTimeout(()=> {
    bellIcon.classList.remove('fa-shake');
  },1000)
  bellNoti = true;
  }
  
  else {
  bellIcon.classList.remove('fa-solid');
  bellIcon.classList.add('fa-regular');
  bellNoti = false;
  }
}


document.querySelectorAll('.js-delete-button').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todo.splice(index, 1);
      renderTodo();
    })
  })  
  savedLocal()
}


function insertToDo() {
const inputTodo = document.querySelector('.js-todo');
const task = inputTodo.value;

const inputDate = document.querySelector('.js-date');
const date = inputDate.value; 

console.log(inputDate)

if (todo !== '') {
todo.push({
  task,
  date,
});
}

renderTodo();
inputTodo.value = '';
inputDate.value = '';
savedLocal()

}

function savedLocal() {
  localStorage.setItem('todo',JSON.stringify(todo))
}

document.querySelector('.js-add-button').addEventListener('click', insertToDo);

document.body.addEventListener('keydown', (event) => event.key === 'Enter' && insertToDo());


renderTodo();

