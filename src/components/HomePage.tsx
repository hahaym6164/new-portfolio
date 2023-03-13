import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import Calculator from "./Calculator/Calculator";
import { actionCreators, State } from "./state";

function HomePage() {
  const dispatch = useDispatch();
  const {
    decrement,
    increment,
    onChange,
    onSubmit,
    withdrawMoney,
    depositMoney,
    bankrupt,
  } = bindActionCreators(actionCreators, dispatch);
  const bank = useSelector((state: State) => state.bank);
  const cal = useSelector((state: State) => state.cal);

  const num = 10;
  return (
    <div>
      HomePage
      {/* <Calculator num={110} initNum={20} /> */}
      <p>{cal.count}</p>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <input
          type="number"
          value={cal.initNum}
          onChange={(e) => {
            onChange(parseInt(e.target.value));
          }}
        />
        <button type="submit">add to it !</button>
      </form>
      <button
        onClick={() => {
          increment(num);
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          decrement(num);
        }}
      >
        decrement
      </button>
      <h1>{bank.amount}</h1>
      <button
        onClick={() => {
          console.log("test", bank);
          depositMoney(100);
        }}
      >
        Deposit
      </button>
      <button onClick={() => withdrawMoney(100)}>withdraw</button>
      <button onClick={() => bankrupt()}>bankrupt</button>
    </div>
  );
}

export default HomePage;
