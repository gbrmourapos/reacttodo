import { useContext } from "react";
import { TodoContext } from "../context/todo.context";
import { TodoCard } from "./todo-card";

const TodoList = () => {
    const { todos } = useContext(TodoContext);

    return (
        <div style={{overflow: "auto", height: "95%", padding: "0.5rem"}}>
            <ul style={{listStyle: "none", padding: '0.5rem'}}>
                {todos?.map((todo) => {
                    return (
                        <TodoCard
                            key={todo.id}
                            id={todo.id}
                            description={todo.description}
                            checked={todo.checked}
                        />
                    );
                })}
            </ul>
        </div>
    )
}

export { TodoList }