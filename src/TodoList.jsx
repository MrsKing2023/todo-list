function TodoList() {
    const todoList = [
      { id: 1, title: 'Buy groceries' },
      { id: 2, title: 'Exercise' },
      { id: 3, title: 'Finish homework' },
    ];
  
    return (
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    );
  }
  
  export default TodoList;