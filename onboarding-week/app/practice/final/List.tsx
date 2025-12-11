import { Todo } from "./page"
import StatusBadge from "./StatusBadge"

type ListProps = {
    todos: Todo[];
    filter: 'all' | 'active' | 'completed';
    setTodos: (todos: Todo[]) => void;

}

export default function List({ todos, filter, setTodos } : ListProps) {

    const handleDeleteTodo = (id:string) => {
        setTodos(todos.filter(c => c.id != id));
    }

    const filteredTodos = todos.filter(todo => {
        if (filter === "all") return true;
        if (filter === "completed") return todo.completed === false;
        if (filter === "active") return todo.completed === true;
        return true;
    });

    return (
        <div className="flex flex-col gap-2 w-full">
            {filteredTodos.map((todo, index) => 
                <div className="flex justify-between" key={index}>
                    <div> {todo.text} </div>
                    <div className="flex gap-2">
                        <StatusBadge status={todo.completed} />
                        <button className="bg-red-200 rounded-md px-2 py-1" onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                    </div>
                    
                </div>
            )}
        </div>
    )
}