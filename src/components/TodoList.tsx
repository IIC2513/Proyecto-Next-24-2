import TodoItem from "./TodoItem";

interface TodoListProps {
    todos: {
        id: number;
        text: string;
        completed: boolean;
    }[];
    onToggle: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle }) => {
    return (
        <ul>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
            ))}
        </ul>
    );
    }

export default TodoList;