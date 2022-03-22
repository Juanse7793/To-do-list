import './style.css';

const object = [
  {
    checkbox: false,
    description: 'first activity',
    index: 1,
  },
  {
    checkbox: false,
    description: 'second activity',
    index: 2,
  },
  {
    checkbox: false,
    description: 'third activity',
    index: 3,
  },
  {
    checkbox: false,
    description: 'fourth activity',
    index: 4,
  },
];

const objectContainer = document.getElementById('object');

window.onload = () => {
  object.sort((x, y) => x.index - y.index);
  object.forEach((object) => {
    const list = document.createElement('li');
    const div2 = document.createElement('div');
    const task = document.createElement('p');
    const check = document.createElement('input');
    const menu = document.createElement('i');
    div2.classList.add('div2');
    menu.classList.add('fa-solid');
    menu.classList.add('fa-ellipsis-vertical');
    list.classList.add('object-li');
    task.innerHTML = object.description;
    task.classList.add('task');
    check.classList.add('check');
    check.type = 'checkbox';
    div2.appendChild(check);
    div2.appendChild(task);
    list.appendChild(div2);
    list.appendChild(menu);
    objectContainer.appendChild(list);
  });
};
