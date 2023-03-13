import { CalReducerACtion } from "../actions";
import { CAL_ACTION_TYPE } from "../actions-types";
import { Dispatch } from "redux";

export const increment = (input: number) => {
  return (dispatch: Dispatch<CalReducerACtion>) => {
    dispatch({
      type: CAL_ACTION_TYPE.INCREMENT,
      payload: input,
    });
  };
};
export const decrement = (input: number) => {
  return (dispatch: Dispatch<CalReducerACtion>) => {
    dispatch({
      type: CAL_ACTION_TYPE.DECREMENT,
      payload: input,
    });
  };
};
export const onChange = (input: number) => {
  return (dispatch: Dispatch<CalReducerACtion>) => {
    dispatch({
      type: CAL_ACTION_TYPE.ONCHANGE,
      payload: input,
    });
  };
};
export const onSubmit = (input?: number) => {
  return (dispatch: Dispatch<CalReducerACtion>) => {
    dispatch({
      type: CAL_ACTION_TYPE.ONSUBMIT,
      payload: input,
    });
  };
};
