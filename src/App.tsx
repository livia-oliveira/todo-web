import TodoItem from "./components/TodoItem/TodoItem";

function App() {

  return (
      <>
        <h1>TodoList</h1>
        <TodoItem todo="Limpar a casa"/>
        <TodoItem todo="Estudar React"/>
        <TodoItem todo="Fazer compras"/>
        <TodoItem todo="Beber água"/>
      </>
  );
}

export default App;
