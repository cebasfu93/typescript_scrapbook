import { ChangeEvent, ReactNode, useReducer } from "react";

// state variable
const initState = { count: 0, text: "" };

// enum with a category for all possible actions
const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  NEW_INPUT,
}

// typing for the action
type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: string;
};

// function to handle all the possible cases triggers of the reducer
const reducer = (state: typeof initState, action: ReducerAction): typeof initState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 };
    case REDUCER_ACTION_TYPE.NEW_INPUT:
      return { ...state, text: action.payload ?? "" };
    default:
      throw new Error();
  }
};

// typing for the children of Counter
type ChildrenType = {
  children: (num: number) => ReactNode;
};

// main component
const Counter = ({ children }: ChildrenType) => {
  // define reducer with a start varibale and the case handler (aka reducer)
  const [state, dispatch] = useReducer(reducer, initState);
  // extract functions from the reducer
  const increment = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT });
  const decrement = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT });
  const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: REDUCER_ACTION_TYPE.NEW_INPUT, payload: e.target.value });
  };

  // build the component calling the reducer functions
  return (
    <>
      <h1>{children(state.count)}</h1>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <input type="text" onChange={handleTextInput} />
      <h2>{state.text}</h2>
    </>
  );
};
