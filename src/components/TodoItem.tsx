
interface TodoItemProps {
    todo: {
        id: number;
        text: string;
        completed: boolean;
    }
    onToggle: (id: number) => void;
}


const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle}) => {
    return (
        <>
            <li
            onClick={() => onToggle(todo.id)}
                >
                {todo.text}
                {todo.completed ? 'completed' : 'not completed'}
            </li>
        </>
    )
}

export default TodoItem;