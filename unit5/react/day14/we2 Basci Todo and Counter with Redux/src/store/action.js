import { ADD_COUNT,ADD_TODO,SUB_COUNT } from "./actionType";

export const addCount = (data) => {
  return {
    type: ADD_COUNT,
    payload: data
  };
};

export const subCount = (data) => {
  return {
    type: SUB_COUNT,
    payload: data,
  };
};

//TODO
export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload:todo,
  }
}
