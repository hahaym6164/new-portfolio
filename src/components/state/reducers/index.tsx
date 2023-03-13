import { combineReducers } from "redux";
import bankReducer from "./bankReducer";
import calReducer from "./calReducer";
import jobReducer from "./jobListReducer";

const reducers = combineReducers({
  bank: bankReducer,
  cal: calReducer,
  job: jobReducer
});

export default reducers;
export type State = ReturnType<typeof reducers>;
