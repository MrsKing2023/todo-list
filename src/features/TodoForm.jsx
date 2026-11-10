import { useRef, useState } from 'react';

function TodoForm({ onAddTodo }) {
  const inputRef = useRef();
  // switched this to a controlled input - React now owns what's
  // typed in the box instead of me reading it off the DOM on submit
  const [workingTodoTitle, setWorkingTodoTitle] = useState('');

  const handleAddTodo = (event) => {
    event.preventDefault();

    if (workingTodoTitle.trim()) {
      onAddTodo(workingTodoTitle);
      setWorkingTodoTitle('');
      inputRef.current.focus();
    }
  };

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Todo</label>
      <input
        ref={inputRef}
        type="text"
        id="todoTitle"
        name="todoTitle"
        placeholder={'Todo text'}
        value={workingTodoTitle}
        onChange={(event) => setWorkingTodoTitle(event.target.value)}
        required
      />
      {/* disables the button when there's nothing but whitespace typed in */}
      <button type="submit" disabled={!workingTodoTitle.trim()}>
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;