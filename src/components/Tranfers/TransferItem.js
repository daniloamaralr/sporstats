import Card from "../UI/Card";
import "./TransferItem.css";
import "./TransferDate";
import TransferDate from "./TransferDate";
import { useState } from "react";

const TransferItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!!!");
  };
  return (
    <Card className="transfer-item">
      <div>
        <TransferDate date={props.date} />
      </div>
      <div className="transfer-item__description">
        <h2>{title}</h2>
        <div className="transfer-item__price"> ${props.price}M</div>
      </div>
      <button onClick={clickHandler}>Click Here</button>
    </Card>
  );
};

export default TransferItem;
