const NewTodo = () => {
  // 'React.FormEvent' is the event type for listening to a form submission
  // You could instead use, for example, 'React.MouseEvent', which you would get when using an 'onClick' listener
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor='text'>Todo text</label>
      <input type='text' id='text' />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
