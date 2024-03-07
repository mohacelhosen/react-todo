import { createContext, useState } from 'react';

export const TodoContext = createContext([])

export const TodoProvider  = ({children }) =>{
    let [taskData, setTaskData] = useState([]);
    return (
        <TodoContext.Provider value={{ taskData, setTaskData }}>
          {children}
        </TodoContext.Provider>
      );
}