import { BANK_ACTION_TYPE } from "../actions-types";
import { Dispatch } from "redux";
import { BankReducerAction } from "../actions/index";
export const depositMoney = (amount: number) => {
  return (dispatch: Dispatch<BankReducerAction>) => {

    dispatch({
      type: BANK_ACTION_TYPE.DEPOSIT,
      payload: amount,
    });
  };
};
export const withdrawMoney = (amount: number) => {
  return (dispatch: Dispatch<BankReducerAction>) => {
    dispatch({
      type: BANK_ACTION_TYPE.WITHDRAW,
      payload: amount,
    });
  };
};
export const bankrupt = (amount?: number) => {
  return (dispatch: Dispatch<BankReducerAction>) => {
    dispatch({
      type: BANK_ACTION_TYPE.BANKRUPT,
    });
  };
};
