import { useState } from "react";
import "./TodoItem.css";

type TodoItemProps = {
    todo: string;
};

function TodoItem({ todo } : TodoItemProps){
   
    const [done, setDone] = useState(false);
        return(
                
                <div className={`container ${done ? "done" : ""}`}>
                    <p>{todo}</p>
                    <input 
                    type="checkbox" 
                    checked = {done}
                    onChange={() => setDone(!done)}
                    />
                </div>
        );
}

export default TodoItem