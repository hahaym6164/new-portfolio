import { JOB_ACTION_TYPE } from "../actions-types";
import { JobListReducerAction } from "../actions/index";

const initialState = {
  value: 0,
};
const jobReducer = (state = initialState, action: JobListReducerAction) => {
  switch (action.type) {
    case JOB_ACTION_TYPE.SWITCH_TAB:
      return { ...state, value: action.payload ?? 0 };
    default:
      return { ...state };
  }
};
export default jobReducer;
