export default class ArrayOfTodos {
  constructor() {
    this.array = [];
  }

  lStorage = () => {
    const convertToLocalStorage = JSON.stringify(this.array);
    localStorage.setItem('todo', convertToLocalStorage);
  }

  organizeIndex = () => {
    for (let i = 0; i < this.array.length; i += 1) {
      this.array[i].index = i + 1;
    }
  }

  addTodos = (checkbox, description, index) => {
    const newTodo = {
      checkbox,
      description,
      index,
    };

    this.array.push(newTodo);
    this.lStorage();
  }

  removeTodos = (checkbox, description, index) => {
    this.array = this.array.filter((todo) => todo.checkbox !== checkbox
    || todo.description !== description || todo.index !== index);
    this.organizeIndex();
    this.lStorage();
  }

  editText = (index, content) => {
    this.array[index].description = content;
    this.lStorage();
  }

  checked = (index, bool) => {
    this.array[index].checkbox = bool;
    this.lStorage();
  }

  clean = () => {
    this.array = this.array.filter((todo) => todo.checkbox === false);
    this.organizeIndex();
    this.lStorage();
  }
}