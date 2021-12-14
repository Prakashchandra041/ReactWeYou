// class Store {
//   constructor(reducer, initState) {
//     this.reducer = reducer;
//     this.state = initState; //this state can be use in instant menthod  of this class
//   }

//   getState() {
//     return this.state;
//   }

//   dispatch(action) {
//     this.state = this.reducer(this.state, action); //here this.reducer return new state and we have to update this in sate (store) must watch video at 1:34 hr
//   }
  
// }
import { createStore } from "redux";
const reducer = (state, { type, payload }) => {
  switch (type) {

    case "INCREMENT":
      return {
        ...state,
        count: state.count + payload,
      };
    
    case "DECREMENT":
      return {
        ...state,
        count: state.count - payload,
          };
      
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    
    default:
      return state;
  }
};

const init = { count: 0, todos: [] };

// new Store ==createStore
const store = createStore(reducer, init);
console.log(store.getState()); 

const ActionInc = { type: "INCREMENT", payload: 1 };
const ActionDec = { type: "DECREMENT", payload: 1 };
const ActionTodo = {
  type: "ADD_TODO",
  payload: { id: 1, status: false, title: "learn Redux" },
};

store.dispatch(ActionInc);
console.log(store.getState());

store.dispatch(ActionInc);
console.log(store.getState());

store.dispatch(ActionDec);
console.log(store.getState());

store.dispatch(ActionTodo);
console.log(store.getState());
  

// step1 - first comment out Store class
//   1.1 install == npm install redux
// 1.2 replae newstore with createStore which we require from downloaded redx;
// 
//1. action creators
//2. action Types.
//3. reducer
//4. store
