const objContainer = document.getElementById('object');

const notDuplicate = () => {
  const remove = document.querySelectorAll('section');
  remove.forEach((todo) => {
    objContainer.removeChild(todo);
  });
};

export default notDuplicate;