import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Heading from "./components/Heading";
import Inputs from "./components/Inputs";
import Todos from "./components/Todos";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState("");
  function addTodo(title, date) {
    const newTodos = { title, date };
    console.log(newTodos);
    setTodos((pre) => [...pre, newTodos]);
  }

  function deleteTodo(id) {
    let newList = todos.filter((todo) => todo.title != id);
    setTodos(newList);
    console.log(todos);
  }
  return (
    <>
      <Heading />
      <Inputs addTodo={addTodo} />
      {todos.length ? (
        <Todos todos={todos} deleteTodo={deleteTodo} />
      ) : (
        <h2 className="heading2">No Todo Left enjoy your Time</h2>
      )}
    </>
  );
}

export default App;
