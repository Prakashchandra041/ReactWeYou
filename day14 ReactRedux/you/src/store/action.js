import { ADD_COUNT, ADD_TODO, SUB_COUNT, TODO_DELETE, TODO_TOGGLE } from "./actionType";

export const addCount = (data) => {
  return {
    type: ADD_COUNT,
    payload: data,
  };
};

export const subCount = (data) => {
    return {
      type: SUB_COUNT,
      payload: data,
    };
}

export const addTodo = (data) => {
  return {
    type: ADD_TODO,
    payload:data,
  }
}

export const delTodo = (data) => {
  return {
    type: TODO_DELETE,
    payload: data,
  };
};


export const  toggleTodo = (data) => {
  return {
    type: TODO_TOGGLE,
    payload: data,
  };
};