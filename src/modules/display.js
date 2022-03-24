import ArrayOfTodos from './ArrayOfTodos.js';
import notDuplicate from './notDuplicate.js';

const objectContainer = document.getElementById('object');
const todos = new ArrayOfTodos();

if (localStorage.todo) {
  const local = JSON.parse(localStorage.todo);
  todos.array = local;
}

const display = () => {
  notDuplicate();
  todos.array.forEach((object, index) => {
    const list = document.createElement('section');
    const div2 = document.createElement('div');
    const task = document.createElement('label');
    const check = document.createElement('input');
    const menu = document.createElement('button');
    div2.classList.add('div2');
    menu.classList.add('trash');
    menu.classList.add('fa-solid');
    menu.classList.add('fa-trash-can');
    list.classList.add('object-li');
    task.setAttribute('contenteditable', 'true');
    task.innerHTML = object.description;
    task.classList.add('task');
    check.classList.add('check');
    check.type = 'checkbox';

    div2.appendChild(check);
    div2.appendChild(task);
    list.appendChild(div2);
    list.appendChild(menu);
    objectContainer.appendChild(list);
    menu.addEventListener('click', () => {
      objectContainer.removeChild(list);
      return todos.removeTodos(object.checkbox, object.description, object.index);
    });
    task.addEventListener('keydown', (event) => {
      if (event.keyCode === 13) {
        event.preventDefault();
      }
    });
    task.addEventListener('input', () => {
      todos.editText(index, task.innerHTML);
    });
  });
};

const element = document.getElementById('entrada');

element.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    if (element.value !== '') {
      todos.addTodos(false, element.value, todos.array.length + 1);
      display();
      element.value = '';
    }
  }
});

export default display;