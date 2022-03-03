import { ADD_COUNT, ADD_TODO, SUB_COUNT, TODO_DELETE, TODO_TOGGLE } from "./actionType";
import { store } from "./store";
const init = {
    count: 0,
    todo:[],
}
export const reducer = (state=init,{type,payload}) => {
    console.log(state);
    switch (type) {
        case ADD_COUNT:
            return {
                ...state,
                count: state.count + payload,
            }
        case SUB_COUNT:
            return {
                ...state,
                count: state.count - payload,
            }
        case ADD_TODO:
            return {
                ...state,
                todo:[...state.todo,payload],
            }
        case TODO_TOGGLE:
            return {
                ...state,
                todo: [...state.todo.map((e) => {
                    if (e.id === payload.id) {
                        e.status = !e.status;
                    }
                    return e
                })]
            }
        case TODO_DELETE:
            return {
                ...state,
                todo: [...state.todo.filter((e) => {
                    return e.id!==payload.id;
                })]
            }
        default: return state;
    }
    
}