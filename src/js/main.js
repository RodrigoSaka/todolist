// Faça a requisição para a API (http://localhost:3001/todos) e exiba de acordo com o layout proposto no README.md
const todoList = [
  {
    userId: 1,
    id: 1,
    title: 'fazer um bolo',
    completed: true
  },
  {
    userId: 1,
    id: 2,
    title: 'aprender um idioma',
    completed: true
  },
  {
    userId: 1,
    id: 3,
    title: 'fazer safadeza',
    completed: true
  }
];

const listElement = document.createElement('ul');

todoList.forEach(todo => {
  const listItem = document.createElement('li');
  listItem.textContent = todo.title;
  listElement.appendChild(listItem);
});

document.getElementById('list').appendChild(listElement);
