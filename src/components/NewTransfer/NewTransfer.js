import React, { useState } from "react";
import TransferForm from "./TransferForm";

import "./NewTransfer.css";
const NewTransfer = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveTransferDataHandler = (enteredTransfer) => {
    // console.log(enteredTransfer);
    const newTransfer = {
      ...enteredTransfer,
      id: Math.random().toString(),
    };
    props.onAddTransfer(newTransfer);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-transfer">
      {!isEditing && (
        <button onClick={startEditingHandler}> Add New Transfer</button>
      )}
      {isEditing && (
        <TransferForm onSaveNewTransfer={saveTransferDataHandler} onCancel={stopEditingHandler}/>
      )}
    </div>
  );
};

export default NewTransfer;
