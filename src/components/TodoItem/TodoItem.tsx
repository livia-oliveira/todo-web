import { useState } from "react";
import "./TodoItem.css";

type TodoItemProps = {
    text: string;
    done: boolean;
    onToggle: () => void;
    onRemove: () => void;
    onEdit: (newText: string) => void;
};

function TodoItem({ text, done, onToggle, onRemove, onEdit } : TodoItemProps){
        const [isEditing, setIsEditing] = useState(false);
        const [value, setValue] = useState(text);

        return (
                
            <div className={`container ${done ? "done" : ""}`}>

                {isEditing ? (
                    <input 
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    />
                ) : (
                <p>{text}</p>
                )}

                <input 
                    type="checkbox" 
                    checked = {done}
                    onChange={onToggle}
                />

                <button onClick={onRemove}>
                    X
                </button>

                {isEditing ? (
                    <button
                        onClick={() => {
                        onEdit(value);
                        setIsEditing(false);
                    }}
                    >
                      💾  
                    </button>
                
                ) : (

                    <button onClick={() => setIsEditing(true)}>
                        ✏️
                    </button>
                )}
            </div>
        );
}

export default TodoItem