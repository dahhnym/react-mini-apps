import { useState } from "react";

const ToDoList = () => {
  const [toDo, setToDo] = useState("")
  const [toDos, setToDos] = useState([]);

  const onChange = (e) => setToDo(e.target.value)
  const onSubmit = (e) => {
    e.preventDefault();
    if(toDo === "") return;
    setToDos((currentToDos) => [toDo, ...currentToDos]);
    setToDo("");
  }

  return (
    <div>
      <h2>To Do List</h2>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={toDo} placeholder="Enter your to-do"/>
        <button>Submit</button>
      </form>
      <ul>
        {toDos.map((todo, idx) => {
          return (
            <li key={idx}>{todo}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default ToDoList;