import _ from 'lodash';
import './style.css';

function toDoList() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack', 'this is my name'], ' ');
  element.classList.add('hello');
  return element;
}

document.body.appendChild(toDoList());