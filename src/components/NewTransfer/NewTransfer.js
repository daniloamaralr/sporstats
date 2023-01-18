import React from "react";
import TransferForm from "./TransferForm";

import "./NewTransfer.css";
const NewTransfer = (props) => {
  const saveTransferDataHandler = (enteredTransfer) => {
    // console.log(enteredTransfer);
    const newTransfer = {
      ...enteredTransfer,
      id: Math.random().toString(),
    };
    props.onAddTransfer(newTransfer)
  };

  return (
    <div className="new-transfer">
      <TransferForm onSaveNewTransfer={saveTransferDataHandler} />
    </div>
  );
};

export default NewTransfer;
