import { createStore } from "redux";

const intialState = {
  count: 0
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1
      };
    case "RESET":
      return {
        ...state,
        count: 0
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
