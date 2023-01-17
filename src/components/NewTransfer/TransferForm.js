import React from "react";

import "./TransferForm.css";
const TransferForm = () => {
  return (
    <form>
      <div className="new-transfer__controls">
        <div className="new-transfer__control">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="new-transfer__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-transfer__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className="new-transfer__actions">
        <button type="submit">Add Transfer</button>
      </div>
    </form>
  );
};

export default TransferForm;
