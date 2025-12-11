"use client"
import { useState } from "react";
import { Todo } from "./page";

type TodoFormProps = {
    todos : Todo[];
    setTodos : (todos : Todo[]) => void;
}

export default function TodoForm({todos, setTodos}: TodoFormProps) {

    const [text, setText] = useState("");
    const [completed, setCompleted] = useState<boolean>(true);

    const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setTodos([...todos, {id: crypto.randomUUID(), text: text, completed: completed}]);
    }

    return (
        <form onSubmit={addTodo} className="flex justify-between  ">
            <div className="flex gap-2 justify-start items-center">
                <input id="text" value={text} onChange={(e) => setText(e.target.value)} className="border rounded-md border-gray-100"/>
                <input
                    id="active"
                    type="radio"
                    name="completed"
                    onChange={() => setCompleted(true)}
                />
                <label htmlFor="active" >
                    active
                </label>
                <input
                    id="completed"
                    type="radio"
                    name="completed"
                    onChange={() => setCompleted(false)}
                />
                <label htmlFor="completed"> completed</label>
            </div>
            
            <button className="bg-blue-400 rounded-md px-2 py-1">Submit todo</button>
        </form>
    )
}