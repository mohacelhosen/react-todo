import { useContext, useRef, useState } from "react";
import "./Todo.css";
import { TodoContext } from "./TodoContex";

const Todo = () => {
  const { setTaskData } = useContext(TodoContext);

  let [item, setItem] = useState({
    name: "",
    description: "",
  });

  const changeText = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const name = useRef();
  const description = useRef();

  const addToList = () => {
    console.log(`Task Name:: ${item.name}`);
    console.log(`Task Description:: ${item.description}`);
    if (item.name.trim() !== "" && item.description.trim() !== "") {
      setTaskData((prevTaskData) => [...prevTaskData, item]);
      setItem({ name: "", description: "" });

      // Clear input fields using refs
      name.current.value = "";
      description.current.value = "";
    }
  };

  return (
    <>
      <div className="mainTodo">
        <div>
          <h1>Todo App</h1>
        </div>

        <div className="todo">
          <div>
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              name="name"
              placeholder="task name"
              ref={name}
              onChange={changeText}
            />
          </div>

          <div className="description">
            <label htmlFor="description">Description</label>
            <br />
            <input
              type="text"
              name="description"
              ref={description}
              placeholder="task details"
              onChange={changeText}
            />
          </div>
          <div className="actionButton">
            <button onClick={addToList}>Add Todo</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
