import "./App.css";
import { useContext, useRef } from "react";
import { TodoContext } from "./TodoContex";

const App = () => {
  const { taskData, setTaskData } = useContext(TodoContext);

  // Use an array of refs for each task
  const taskTitleRefs = useRef();

  const completeTaks = (index)=>{
    taskTitleRefs.current.style.textDecoration = "line-through";
    console.log(index);
  }
  const deleteTask = (index) => {
    const updatedTasks = [...taskData];
    updatedTasks.splice(index, 1);
    setTaskData(updatedTasks);
  };

  return (
    <div className="app">
      {taskData.map((element, index) => (
        <div key={index}>
          <div className="singleTask">
            <div className="taskDetails">
            <p className="title" ref={taskTitleRefs}>{element?.name}</p>
              <p className="details">{element?.description}</p>
            </div>
            <div className="buttonDetails">
              <button className="complete" onClick={()=>completeTaks(index)}>Complete</button>
              <button className="delete" onClick={()=>deleteTask(index)}>Delete</button>
            </div>
          </div>
          {index !== taskData.length - 1 && <hr key={`hr-${index}`} />}
        </div>
      ))}
    </div>
  );
};

export default App;
