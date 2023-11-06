import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo Mssg",
            completed: false
        },
        {
            id: 2,
            todo: "Todo Mssg",
            completed: false
        },
    ],

    //Create function here just a skeleton
    //Complete it in the app
    addTodo: (todo) => {},
    updateTodo: (id, todo)=> {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
})


export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;