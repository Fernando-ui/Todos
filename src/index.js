import './styles.css';
import {Todo,TodoList} from './classes'
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();
// const tarea = new Todo('Aprender todo lo aprendido');


// todoList.nuevoTodo(tarea);

// console.log(todoList);

// crearTodoHtml(tarea);

// localStorage.setItem('mi-key', 'Hola-Mundo');
todoList.todos.forEach(todo => crearTodoHtml(todo));

// const newTodo = new Todo('Aprender algo');
// todoList.nuevoTodo(newTodo);