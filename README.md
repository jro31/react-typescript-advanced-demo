The second project based on *'Section 27: React + Typescript'* of Academind's *['React - The Complete Guide'](https://acad.link/reactjs)* course, this repo, created from [Create React App](https://github.com/facebook/create-react-app), has commits of examples of:

* Adding a `<Todos>` component with a type of `React.FC<{ items: string[] }>`, and an explanation of what that means - [Commit link](https://github.com/jro31/react-typescript-advanced-demo/commit/12573d7ff0de09328ac6ef05e7479a7604d55085)
* Adding a `Todo` model, and using it as the type in `React.FC<{ items: Todo[] }>` - [Commit link](https://github.com/jro31/react-typescript-advanced-demo/commit/3b636f8e09cfa363c820c20767a8b9f9baf03ae5)
* Creating a `<TodoItem>` component - [Commit link](https://github.com/jro31/react-typescript-advanced-demo/commit/f7757b3f9ff5b4241edf1a11767e6955711f7dbd)
* Creating the `<NewTodo>` `<form>` component, and setting the `event` type on the submit-hander to `event: React.FormEvent` - [Commit link](https://github.com/jro31/react-typescript-advanced-demo/commit/7ce1df19efce9fc71fe8421d58e38db026fb62a9)
* Handling the `<NewTodo>` `<form>` submission: - [Commit link](https://github.com/jro31/react-typescript-advanced-demo/commit/66fff8c486aaa482fa891825a420145f94cff5b2)
  * Using 'refs' to fetch the entered value on the `<NewTodo>` `<form>`:
    * Setting the type of `<NewTodo>` to `React.FC<{ onAddTodo: (text: string) => void }>`, with an explanation of what that means
    * Setting the 'ref' with `useRef<HTMLInputElement>(null)`, including explanation
    * Setting the `enteredText` with `todoTextInputRef.current!.value`
      * And explaining `todoTextInputRef.current!.value` vs `todoTextInputRef.current?.value`
  * Setting the `todos` state with `useState<Todo[]>([])`
* Adding the functionality to remove a to-do - [Commit link](https://github.com/jro31/react-typescript-advanced-demo/commit/da651ea61c42748e4d5a2cd62d00fe4140d23e0e)
* Using the `Context API` rather than passing the to-dos and add/remove functions through props - [Commit link](https://github.com/jro31/react-typescript-advanced-demo/commit/5535efd6bd8bbda93167f588818d359d7cda9251)
* Add further reading links - [Commit link](https://github.com/jro31/react-typescript-advanced-demo/commit/566d498ac0c46e89b67b3176ce93ec54dbf022b5)
  * The official docs
  * Create React App Typescript
