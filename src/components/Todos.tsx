// 'FC' stands for 'Functional Component'
// Setting a component to have a type 'React.FC' means that it knows that it'll always have a 'children' prop (as in 'props.children')
// Adding the `<{items: string[]}>` will then merge to this, an object with an items property, containing an array of strings
// So 'props' is now expected to have children (optionally), and 'items'
// (to make 'items' optional, we could instead have '<{ items?: string[] }>')
const Todos: React.FC<{ items: string[] }> = props => {
  return (
    <ul>
      {props.items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Todos;
