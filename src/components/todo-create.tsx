import { useContext, useRef } from "react";
import { TodoContext } from "../context/todo.context";
import { TodoType } from "../types/todo.types";
import { v4 as uuidv4 } from "uuid";

const TodoCreate = () => {
    const { todos, setTodos } = useContext(TodoContext);
    const inputRef = useRef<any>('');

    const handleSaveTodo = () => {

        if (!inputRef.current.value) {
            // Should not include empty todo
            return;
        }

        const newTodo: TodoType = {
            id: uuidv4(),
            description: inputRef.current.value,
            checked: false,
        };

        setTodos([...todos, newTodo]);

        inputRef.current.value = "";
    };

    return (
        <div style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            marginTop: "1rem",
            gap: "1rem",
            alignItems: "center",
            marginBottom: '1rem'
        }}>
            
            <input  style={{width: '80%'}} type="text" ref={inputRef}  placeholder="Description"/>
            <button className="responsive secondary" onClick={handleSaveTodo} style={{
                width: "100px",
                borderRadius: '5px',
                margin: 0,
            }}>Submit</button>
        </div>
    )
}

export { TodoCreate }