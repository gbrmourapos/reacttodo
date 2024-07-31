import { useContext, useState } from "react";
import { TodoContext } from "../context/todo.context";

type TodoCardProps = {
    id: string;
    description: string;
    checked: boolean;    
}

const TodoCard = ({ id, description, checked }: TodoCardProps) => {
    const { setTodos, todos } = useContext(TodoContext);

    const handleChange = () => {
        const newTodos = todos.map((todo) => {
            if (todo.id == id) {
                todo.checked = !checked;
            }

            return todo;
        });

        setTodos(newTodos);
    };

    const handleRemove = () => {
        setTodos(todos.filter((e) => e.id !== id));
    };

    return (
        <li key={id}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between", margin: "0.5rem 0" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <input type="checkbox" checked={checked} onChange={handleChange} />
                    <p style={{ margin: '0 0.5rem ', textDecoration: checked ? "line-through" : "none"}}>{description}</p>
                </div>
                <button
                    onClick={handleRemove}
                    className="secondary"
                    style={{ borderRadius: "5px" }}>Remove</button>
            </div>
        </li>
    )
}

export { TodoCard }