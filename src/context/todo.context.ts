import { Dispatch, createContext } from "react";
import { TodoType } from "../types/todo.types";

type TodoContextProps = {
    setTodos: Dispatch<React.SetStateAction<TodoType[]>>,
    todos: Array<TodoType>
}

const TodoContext = createContext<TodoContextProps>({
    setTodos: () => {},
    todos: []
})

export { TodoContext }