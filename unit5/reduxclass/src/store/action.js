import {
  ADD_COUNT,
  ADD_TODO,
  ADD_TODO_ERROR,
  ADD_TODO_lOADING,
  ADD_TODO_SUCCESS,
  GET_TODO_ERROR,
  GET_TODO_lOADING,
  GET_TODO_SUCCESS,
  SUB_COUNT,
} from "./actionType"; 

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
};

//TODO
export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const addTodoLoading = () => ({
  type: ADD_TODO_lOADING,
});

export const addTodoSuccess = (data) => ({ type: ADD_TODO_SUCCESS,payload:data });


export const addTodoError = (err) => ({ type: ADD_TODO_ERROR, payload: err });

//--------------------------------------------------------------------

export const getTodoLoading = () => ({
  type: GET_TODO_lOADING,
});

export const getTodoSuccess = (data) => ({
  type: GET_TODO_SUCCESS,
  payload: data,
});

export const getTodoError = (err) => ({ type: GET_TODO_ERROR, payload: err });

// remember we have three different state so we that network call
//actually take this store to three different state
