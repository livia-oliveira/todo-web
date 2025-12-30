import { useState } from "react";
import TodoItem from "../TodoItem";

type Todo = {
    id: number;
    text: string;
    done: boolean; 
};

function TodoList(){
    
    const [todos, setTodos] = useState<Todo[]>([
        { id: 1, text: "Limpar a casa", done: false},
        { id: 2, text: "Estudar react", done: true},
    ]);

    function toggleTodo(id: number){
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id
            ? { ...todo, done: !todo.done}
            : todo
            )
        );
    }



    return (
        <div>
            {todos.map((todo) =>(
                <TodoItem
                key={todo.id}
                text={todo.text}
                done={todo.done}
                onToggle={()=> toggleTodo(todo.id)}
                />
            ))}
        </div>
    );

}

export default TodoList;