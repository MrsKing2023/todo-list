function TodoListItem({ todo, onCompleteTodo }) {
  return (
    <li>
      {/* checkbox stays in sync with todo.isCompleted - checking it
          calls back up to App so the real state updates */}
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => onCompleteTodo(todo.id)}
      />
      {todo.title}
    </li>
  );
}

export default TodoListItem;