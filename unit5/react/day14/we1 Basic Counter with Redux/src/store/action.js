import { ADD_COUNT,SUB_COUNT } from "./actionType";

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