export default class ArrayOfTodos {
  constructor() {
    this.array = [];
  }

  lStorage = () => {
    const convertToLocalStorage = JSON.stringify(this.array);
    localStorage.setItem('todo', convertToLocalStorage);
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
    for (let i = 0; i < this.array.length; i += 1) {
      this.array[i].index = i + 1;
    }
    this.lStorage();
  }

  editText = (index, content) => {
    this.array[index].description = content;
    this.lStorage();
  }
}