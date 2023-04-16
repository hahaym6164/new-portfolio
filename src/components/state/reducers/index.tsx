import { combineReducers } from "redux";
import bankReducer from "./bankReducer";
import bookSearchReducer from "../Features/bookSearchSlice";
import calReducer from "./calReducer";
import jobReducer from "./jobListReducer";
import pokeReducer from '../Features/pokeDexSlice'
const reducers = combineReducers({
  bank: bankReducer,
  cal: calReducer,
  job: jobReducer,
  book: bookSearchReducer,
  poke: pokeReducer
});

export default reducers;
export type State = ReturnType<typeof reducers>;
