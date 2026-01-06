import { useState } from "react";

function Todos({ todos, deleteTodo }) {
  return (
    <>
      <div className="container text-center my-div">
        {todos.map((todo) => (
          <div className="row my-div" key={todo.title}>
            <div className="col-4">{todo.title}</div>
            <div className="col-4">{todo.date}</div>
            <div className="col-2">
              <button
                type="button"
                className="btn btn-danger my-btn"
                onClick={() => deleteTodo(todo.title)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Todos;
