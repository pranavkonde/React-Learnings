import { useReducer } from "react";
import React from "react";
const initialState = {
  count: 0,
  showCountFlag: true,
};

function reducer(state, action) {
  console.log(state, action);

  switch (action.type) {
    case "add":
      return {
        ...state,
        count: state.count + 1,
      };
    case "sub":
      return {
        ...state,
        count: state.count - 1,
      };
    case "reset":
      return {
        ...state,
        count: 0,
      };
    case "showcount":
      return {
        ...state,
        showCountFlag: !state.showCountFlag
      };

      default:
        return state;
  }
}

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state)
  return (
  <div>
    <h1>UseReducer Hook</h1>
    {
        state.showCountFlag? <h5>Count is: {state.count}</h5>: null

    }
    <div>
        <button onClick={()=> dispatch({type: "add"})}>
            Increase Count
        </button>
        <button onClick={()=> dispatch({type: "sub"})}>
            Decrease Count
        </button>
        <button onClick={()=> dispatch({type: "reset"})}>
            Reset Count
        </button>
        <button onClick={()=> dispatch({type: "showcount"})}>
             Show count
        </button>
    </div>
  </div>
  );
}
