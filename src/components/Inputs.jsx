import { useState } from "react";

function Inputs({ addTodo }) {
  const [titleInput, setTitleInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  function handleClick() {
    // console.log(titleInput);
    // console.log(dateInput);
    // console.log(titleInput + dateInput);
    if (titleInput && dateInput) {
      addTodo(titleInput, dateInput);
      setDateInput("");
      setTitleInput("");
    } else {
      alert("Fill both fields");
    }
  }
  return (
    <>
      <div className="container text-center my-div">
        <div className="row">
          <div className="col-4">
            <input
              type="text"
              className="myInput"
              value={titleInput}
              placeholder="Enter todo items..."
              onChange={(e) => setTitleInput(e.target.value)}
            />
          </div>
          <div className="col-4">
            <input
              type="date"
              className="myInput"
              value={dateInput}
              onChange={(e) => setDateInput(e.target.value)}
            />
          </div>
          <div className="col-2 ">
            <button
              type="button"
              className="btn btn-success my-btn"
              onClick={handleClick}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Inputs;
