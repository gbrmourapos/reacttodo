import { useEffect, useMemo, useState } from "react";
import { TodoType } from "./types/todo.types";
import { TodoContext } from "./context/todo.context";
import { TodoList } from "./components/todo-list";
import { TodoCreate } from "./components/todo-create";
import "nes.css/css/nes.min.css";
import { useFetchTodo } from "./hook/use-fetch-todo";
import { v4 as uuidv4 } from "uuid";

function App() {
	const [todos, setTodos] = useState<Array<TodoType>>([]);
	const contextValue = useMemo(() => ({ setTodos, todos }), [todos])

	const values = useFetchTodo();

	useEffect(() => {
		console.log(values);
		const newTodos = values?.todos?.map((value: any) => {
			const newTodo: TodoType = {
				id: uuidv4(),
				description: value.todo,
				checked: value.completed,
			}
			return newTodo;
		})

		setTodos(newTodos);
	}, [values])

	return (
		<div style={{
			display: "flex",
			padding: "1rem",
			height: '100vh',
			justifyContent: "center",
		}}>
			<TodoContext.Provider value={contextValue}>
				<div style={{
					borderRadius: "10px",
					width: "800px",
					minWidth: "600px",
					maxWidth: "1000px",
					boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
					display: "flex",
					flexDirection: "column"
				}}>
					<TodoCreate />
					<TodoList />
				</div>
			</TodoContext.Provider>
		</div>
	);
}

export default App;
