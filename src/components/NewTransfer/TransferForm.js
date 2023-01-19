import React, { useState } from "react";

import "./TransferForm.css";
const TransferForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const [isClickedButtonAddNewTransfer, setIsClickedButtonAddNewTransfer] =
    useState(false);
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredPrice: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({ ...userInput, enteredTitle: event.target.value });
    // setUserInput = (prevState) => {
    //   return {...prevState, enteredTitle: event.target.value}
    // }
  };

  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
    // setUserInput({ ...userInput, enteredPrice: event.target.value });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({ ...userInput, enteredDate: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const transferData = {
      title: enteredTitle,
      price: enteredPrice,
      date: new Date(enteredDate),
    };

    props.onSaveNewTransfer(transferData);
    setEnteredTitle("");
    setEnteredPrice("");
    setEnteredDate("");
  };

  const onButtonClickedHandler = (event) => {
    setIsClickedButtonAddNewTransfer(!isClickedButtonAddNewTransfer);
  };

  return (
    <form onSubmit={submitHandler}>
      {!isClickedButtonAddNewTransfer && (
        <div className="new-transfer__actions">
          <button onClick={onButtonClickedHandler}> Add New Transfer</button>
        </div>
      )}
      {isClickedButtonAddNewTransfer && (
        <div className="new-transfer__controls">
          <div className="new-transfer__control">
            <label>Title</label>
            <input
              type="text"
              onChange={titleChangeHandler}
              value={enteredTitle}
            />
          </div>
          <div className="new-transfer__control">
            <label>Price</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredPrice}
              onChange={priceChangeHandler}
            />
          </div>
          <div className="new-transfer__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
          <div className="new-transfer__actions">
            <button onClick={onButtonClickedHandler}>Cancel</button>
            <button type="submit">Add Transfer</button>
          </div>
        </div>
      )}
    </form>
  );
};

export default TransferForm;
