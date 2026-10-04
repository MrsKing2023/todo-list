
import './App.css'

function App() {

  const todoList = [
    { id: 1, title: 'Buy groceries' },
    { id: 2, title: 'Exercise' },
    { id: 3, title: 'Finish homework' },
  ];

  return (
    <div>
      <h1>Suburwa's Todo List</h1>
      <ul>
  {todoList.map((todo) => (
    <li key={todo.id}>{todo.title}</li>
  ))}
</ul>
    </div>
  )
}

export default App
