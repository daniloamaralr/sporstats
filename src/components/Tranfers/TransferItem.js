import Card from "../UI/Card";
import "./TransferItem.css";
import "./TransferDate";
import TransferDate from "./TransferDate";
// import { useState } from "react";

const TransferItem = (props) => {

  return (
    <Card className="transfer-item">
      <div>
        <TransferDate date={props.date} />
      </div>
      <div className="transfer-item__description">
        <h2>{props.title}</h2>
        <div className="transfer-item__price"> ${props.price}M</div>
      </div>
    </Card>
  );
};

export default TransferItem;
