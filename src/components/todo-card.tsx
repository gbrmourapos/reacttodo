import { useContext } from "react";
import { TodoContext } from "../context/todo.context";

type TodoCardProps = {
    id: string;
    description: string;
}

const TodoCard = ({id, description }: TodoCardProps ) => {
    const {setTodos, todos} = useContext(TodoContext);

    const handleRemove = () => {
		setTodos(todos.filter((e) => e.id !== id));
	};
    
    return (
        <li key={id}  >
            <div style={{display: 'flex', alignItems: 'center', justifyContent: "space-between"}}>
                <p style={{marginRight: '0.5rem'}}>{description}</p>
                <button 
                    onClick={handleRemove}
                    className="secondary"
                    style={{borderRadius: "5px"}}>Remove</button>
            </div>
        </li>
    )
}

export { TodoCard }