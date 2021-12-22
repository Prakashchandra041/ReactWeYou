class Store {
  constructor(reducer, initState) {
    this.reducer = reducer;
    this.state = initState; //this state can be use in instant menthod  of this class
  }
  getState() {
    return this.state;
  }

  dispatch(action) {
    this.state = this.reducer(this.state, action); //here this.reducer return new state and we have to update this in state (store) must watch video at 1:34 hr
  }
}

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
const store = new Store(reducer, init);

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

//1. if you want to change something, dispatch /send an action;
// 2. action always go  to reducer
// 3. reducer  returns new store
// 4. store updates view

// Action  :   { type: "INC_COUNT", payload: 1 }
// Dispatch:   function.  take action, give it to reducer
// Reducer :   function.  takes current store and action and   return new sotre
// view    :    whatever.  DOM, console. terminal (UI)
