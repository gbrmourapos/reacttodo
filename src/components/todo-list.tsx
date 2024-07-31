import { useContext } from "react";
import { TodoContext } from "../context/todo.context";
import { TodoCard } from "./todo-card";

const TodoList = () => {
    const { todos } = useContext(TodoContext);

    return (
        <div style={{overflow: "auto", height: "95%", padding: "0.5rem"}}>
            <ul >
                {todos?.map((todo) => {
                    return (
                        <TodoCard
                            key={todo.id}
                            id={todo.id}
                            description={todo.description}
                        />
                    );
                })}
            </ul>
        </div>
    )
}

export { TodoList }