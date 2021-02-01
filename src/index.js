import './styles.css';
import {Todo,TodoList} from './classes'

const todoList = new TodoList();
const tarea = new Todo('Aprender todo lo aprendido');
const tarea2 = new Todo('Comprar algo');

console.log(tarea);

todoList.nuevoTodo(tarea);
todoList.nuevoTodo(tarea2);

console.log(todoList);
