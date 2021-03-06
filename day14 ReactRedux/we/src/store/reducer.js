import { ADD_COUNT, ADD_TODO, ADD_TODO_ERROR, ADD_TODO_lOADING, ADD_TODO_SUCCESS, GET_TODO_ERROR, GET_TODO_lOADING, GET_TODO_SUCCESS, SUB_COUNT } from "./actionType";

const initState = {
  count: 0,
  todos: {
    loading: false,
    data: [],
    error: false,
  },
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_COUNT:
      return {
        ...state,
        count: state.count + payload,
      };

    case SUB_COUNT:
      return { 
        ...state,
        count: state.count - payload,
      };

    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload],
      };
//--------------------------------------------------------------
    case ADD_TODO_lOADING:
      return {
        ...state,

        todos: {
          ...state.todos,
          loading: true,
        },
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,

        todos: {
          loading: false,
          data: [...state.todos.data, payload],
        },
      };
    case ADD_TODO_ERROR:
      return {
        ...state,
        todos: {
          ...state.todos,
          error: true,
        },
      };
//---------------------------------------------
    case GET_TODO_lOADING:
      return {
        ...state,

        todos: {
          ...state.todos,
          loading: true,
        },
      };

    case GET_TODO_SUCCESS:
      return {
        ...state,

        todos: {
          loading: false,
          data: payload,
        },
      };

    case GET_TODO_ERROR:
      return {
        ...state,
        todos: {
          loading:false,
          error: payload,
        },
          };
      
      
    default:
      return state;
  }
};
