import React, { useReducer } from "react";

interface numberCounter {
  num?: number;
  initNum?: number;
}
const enum REDUCER_ACTION_TYPE {
  INCREMENT = "increment",
  DECREMENT = "decrement",
  ONCHANGE = "onchange",
  ONSUBMIT = "onsubmit",
}
type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: number;
};

const Calculator = ({ num, initNum }: numberCounter) => {
  const initialState = {
    count: num ?? 0,
    intialNum: initNum ?? 10,
  };

  const reducer = (
    state: typeof initialState,
    action: ReducerAction
  ): typeof initialState => {
    switch (action.type) {
      case REDUCER_ACTION_TYPE.INCREMENT:
        return { ...state, count: state.count + 1 };
      case REDUCER_ACTION_TYPE.DECREMENT:
        return { ...state, count: state.count - 1 };
      case REDUCER_ACTION_TYPE.ONCHANGE:
        return { ...state, intialNum: action.payload ?? 0 };
      case REDUCER_ACTION_TYPE.ONSUBMIT:
        return { ...state, count: state.count + state.intialNum };
      default:
        throw new Error();
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state, initNum);

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch({ type: REDUCER_ACTION_TYPE.ONSUBMIT });
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let res = e.target.value ? parseInt(e.target.value) : 0;
    e.target.value = res.toString();
    console.log(res);

    dispatch({
      type: REDUCER_ACTION_TYPE.ONCHANGE,
      payload: res,
    });
  };
  const increment = () => {
    dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT });
  };
  const decrement = () => {
    dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT });
  };

  //   type reducer<State, Action> = (state: State, action: Action) => State;
  return (
    <div>
      <p>{state.count}</p>
      <form action="" onSubmit={onSubmit}>
        <input type="number" value={state.intialNum} onChange={onChange} />
        <button type="submit">add to it !</button>
      </form>

      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default Calculator;
