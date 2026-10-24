import { useState } from 'react';
import './App.css'
import TodoList from './TodoList.jsx';
import TodoForm from './TodoForm.jsx';

const todos = [
  { id: 1, title: 'Buy groceries' },
  { id: 2, title: 'Exercise' },
  { id: 3, title: 'Finish homework' },
];

function App() {
  const [todoList, setTodoList] = useState(todos);

  return (
    <div>
      <h1>Suburwa's Todo List</h1>
      <TodoForm />
      <TodoList todoList={todoList} />
    </div>
  )
}

export default App