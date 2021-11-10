import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import TodosContextProvider from './store/todos-context';

function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;

// Further reading on Typescript:
// Official docs - https://www.typescriptlang.org/
// Create React App Typescript - https://create-react-app.dev/docs/adding-typescript/
