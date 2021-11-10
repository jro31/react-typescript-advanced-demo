import { useState } from 'react';

import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  // This sets that the 'todos' variable will hold an array of 'Todo' objects (set in './models/todo')

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos(prevTodos => {
      return prevTodos.concat(newTodo);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
