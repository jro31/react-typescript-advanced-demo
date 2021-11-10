import React, { useRef } from 'react';

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = props => {
  // This sets 'NewTodo' as a React functional component, with a prop of 'onAddTodo'
  // It then sets the type of 'onAddTodo' as a function - Note that this does NOT create a function, it simply sets it as a function type
  // We use 'void', because we aren't expecting any return value from the function
  // It also sets that 'onAddTodo' will have one parameter, of type string '(text: string)'

  const todoTextInputRef = useRef<HTMLInputElement>(null);
  // This sets the ref type as being set on an <input> tag (there is also 'HTMLButtonElement', 'HTMLParagraphElement' etc)
  // The 'null' argument sets the initial value (which is required in Typestript)

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;
    // Using a '?' here (as in 'todoTextInputRef.current?.value;') would mean that if the ref is not yet connected to the <input> (so if 'current' does not exist), then it will return null
    // (similar to using an '&' in Ruby)
    // It sets the 'enteredText' type as 'const enteredText: string | undefined'
    // If you instead replace the '?' with an '!' (as we're doing here), then it says that you know that 'current' will NEVER be null here
    // It sets the 'enteredText' type as 'const enteredText: string'

    if (enteredText.trim().length === 0) {
      // Optionally throw an error here
      return;
    }

    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor='text'>Todo text</label>
      <input type='text' id='text' ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
