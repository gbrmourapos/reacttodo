import { useRef, useState } from 'react';
import './App.css';
import { TodoType } from './types/todo.types';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const inputRef = useRef<any>();

  const handleRemove = (id: string) => {
    setTodos((currentTodos) => {
      return [...currentTodos.filter((e) => e.id !== id)] 
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    setTodos((currentTodos) => {
      const newTodo: TodoType = {
        id: uuidv4(),
        description: inputRef.current.value,
      }

      inputRef.current.value = "";
      
      return [...currentTodos, newTodo];
    });
  }

  return (
    <div className="App">
      <ul>
        {todos?.map((todo) => {
          return (
            <li key={todo.id}>
              <p>{todo.description}</p>
              <button onClick={() => {handleRemove(todo.id)}}> Remove </button>
            </li>
          )  
        })}
      </ul>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Description: <input type="text" ref={inputRef}/></label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
