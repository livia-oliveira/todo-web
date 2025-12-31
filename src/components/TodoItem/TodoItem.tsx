import "./TodoItem.css";

type TodoItemProps = {
    text: string;
    done: boolean;
    onToggle: () => void;
    onRemove: () => void;
};

function TodoItem({ text, done, onToggle, onRemove } : TodoItemProps){

        return (
                
            <div className={`container ${done ? "done" : ""}`}>
                <p>{text}</p>
                <input 
                    type="checkbox" 
                    checked = {done}
                    onChange={onToggle}
                />

                <button onClick={onRemove}>
                    X
                </button>
            </div>
        );
}

export default TodoItem