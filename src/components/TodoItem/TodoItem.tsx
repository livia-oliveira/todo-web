import "./TodoItem.css";

type TodoItemProps = {
    text: string;
    done: boolean;
    onToggle: () => void;
};

function TodoItem({ text, done, onToggle } : TodoItemProps){

        return (
                
            <div className={`container ${done ? "done" : ""}`}>
                <p>{text}</p>
                <input 
                    type="checkbox" 
                    checked = {done}
                    onChange={onToggle}
                />
            </div>
        );
}

export default TodoItem