import React from "react";
import TransferForm from "./TransferForm";

import "./NewTransfer.css";
const NewTransfer = (props) => {
  const newTransferHandler = (enteredTransfer) => {
    // console.log(enteredTransfer);
    const newTransfer = {
      ...enteredTransfer,
      id: Math.random().toString(),
    };
    props.onNewTranferAdded(newTransfer)
  };

  return (
    <div className="new-transfer">
      <TransferForm onSubmittedNewTransfer={newTransferHandler} />
    </div>
  );
};

export default NewTransfer;
