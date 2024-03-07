import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TodoProvider } from "./TodoContex.jsx";
import Todo from "./Todo.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoProvider>
      <Todo/>
      <App />
    </TodoProvider>
  </React.StrictMode>
);
