import Todo from '../models/todo';

// This says that 'items' will be an array of 'Todo' objects
const Todos: React.FC<{ items: Todo[] }> = props => {
  return (
    <ul>
      {props.items.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
