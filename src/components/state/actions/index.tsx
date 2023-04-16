import { BANK_ACTION_TYPE, CAL_ACTION_TYPE, JOB_ACTION_TYPE,BOOK_SEARCH_ACTION_TYPE} from "../actions-types";

export type BankReducerAction = {
  type: BANK_ACTION_TYPE;
  payload?: number;
};
export type CalReducerACtion = {
  type: CAL_ACTION_TYPE;
  payload?: number;
};
export type JobListReducerAction = {
  type: JOB_ACTION_TYPE;
  payload? : number;
}
export type BookSearchReducerAction = {
  type: BOOK_SEARCH_ACTION_TYPE;
  payload?: {
    sortType?: string,
    bookList?:[],
    searchKey?: string,
    pageNumber?: number
  }
}
