import { useState } from "react";

type TodoFormProps = {
    onAddTodo: (text: string) => void;
};

function TodoForm({ onAddTodo }: TodoFormProps) {

    const [text, setText] = useState("");

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        if(text.trim() === "") return;

        onAddTodo(text);
        setText("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="Digite uma tarefa"
            value={text}
            onChange={(e) => {setText(e.target.value)}}
            />
            <button type="submit"> Adicionar tarefa</button>
        </form>
    );
}

export default TodoForm;