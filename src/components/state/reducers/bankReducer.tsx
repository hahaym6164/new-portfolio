import { BANK_ACTION_TYPE } from "../actions-types";
import { BankReducerAction } from "../actions/index";

const initialState = { amount: 0 };

const bankReducer = (state = initialState, action: BankReducerAction) => {
  switch (action.type) {
    case BANK_ACTION_TYPE.DEPOSIT:
      return { ...state, amount: state.amount + (action.payload ?? 0) };
    case BANK_ACTION_TYPE.WITHDRAW:
      return { ...state, amount: state.amount - (action.payload ?? 0) };
    case BANK_ACTION_TYPE.BANKRUPT:
      return { ...state, amount: 0 };
    default:
      return state;
  }
};

export default bankReducer;
