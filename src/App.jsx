import { useState } from 'react';
import './App.css'
import TodoList from './TodoList.jsx';
import TodoForm from './TodoForm.jsx';

function App() {
  const [todoList, setTodoList] = useState([]);

  function addTodo(todoTitle) {
    // added isCompleted here so every new todo starts off unchecked
    const newTodo = { id: Date.now(), title: todoTitle, isCompleted: false };
    setTodoList((previous) => [newTodo, ...previous]);
  }

  function completeTodo(id) {
    // mapping through instead of mutating - same lesson as the bug hunt,
    // build a new array instead of changing the old one directly
    setTodoList((previous) =>
      previous.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: true } : todo
      )
    );
  }

  return (
    <div>
      <h1>Suburwa's Todo List</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} onCompleteTodo={completeTodo} />
    </div>
  )
}

export default App