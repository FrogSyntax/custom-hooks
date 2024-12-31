import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [];
// const init = () => {
//     return JSON.parse(localStorage.getItem("todos") || []);
// };

export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, );
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = (todo) => {
        const action = {
            //! Type determina la accion
            type: "Add Todo",
            //! Aqui se envia el dato
            payload: todo,
        };
        dispatch(action);
    };
    const handleDeleteTodo = (id) => {
        dispatch({
            type: "Remove Todo",
            payload: id,
        });
    };
    const handleToggleTodo = (id) => {
        dispatch({
            type: "Toggle Todo",
            payload: id,
        });
    };
    const todosCount = todos.length
    const pendingTodosCount = todos.filter(x => x.done === false).length

    return {
        handleDeleteTodo,
        handleToggleTodo,
        handleNewTodo,
        todos,
        todosCount,
        pendingTodosCount,
    };
};
