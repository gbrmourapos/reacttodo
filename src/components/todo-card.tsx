type TodoCardProps = {
    id: string;
    description: string;
    onRemove: () => void;
}

const TodoCard = ({id, description, onRemove }: TodoCardProps ) => {
    return (
        <li key={id}  >
            <div style={{display: 'flex', alignItems: 'center'}}>
                <p style={{marginRight: '0.5rem'}}>{description}</p>
                <button style={{height: '30px', width: 'auto'}} onClick={onRemove}> Remove </button>
            </div>
        </li>
    )
}

export { TodoCard }