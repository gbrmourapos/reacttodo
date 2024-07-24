import { useRef, useState } from "react";
import { TodoType } from "./types/todo.types";
import { v4 as uuidv4 } from "uuid";
import { TodoCard } from "./components/todo-card";

function App() {
	const [todos, setTodos] = useState<Array<TodoType>>([]);
	const inputRef = useRef<any>();

	const handleRemove = (id: string) => {
		setTodos(todos.filter((e) => e.id !== id));
	};

	const handleSaveTodo = () => {
		const newTodo: TodoType = {
			id: uuidv4(),
			description: inputRef.current.value,
		};

		setTodos([...todos, newTodo]);
		
		inputRef.current.value = "";
	};

  return (
	<div className="App">
		<div>
			<label>Description: <input type="text" ref={inputRef} /></label>
			<button onClick={handleSaveTodo}>Submit</button>
		</div>
		<ul>
			{todos?.map((todo) => {
				return (
					<TodoCard
						key={todo.id}
						id={todo.id}
						description={todo.description}
						onRemove={() => {
							handleRemove(todo.id);
						}}
					/>
				);
			})}
		</ul>
	</div>
  );
}

export default App;
