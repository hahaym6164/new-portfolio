import { CalReducerACtion } from "../actions";
import { CAL_ACTION_TYPE } from "../actions-types";

const initialState = {
  count: 0,
  initNum: 0,
};

const calReducer = (state = initialState, action: CalReducerACtion) => {
  switch (action.type) {
    case CAL_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + (action.payload ?? 0) };
    case CAL_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - (action.payload ?? 0) };
    case CAL_ACTION_TYPE.ONCHANGE:
      return { ...state, initNum: action.payload ?? 0 };
    case CAL_ACTION_TYPE.ONSUBMIT:
      return { ...state, count: state.count + state.initNum };

    default:
      return { ...state };
  }
};
export default calReducer;
