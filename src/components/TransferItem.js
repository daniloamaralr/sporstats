import "./TransferItem.css";
import "./TransferDate"
import TransferDate from "./TransferDate";

function TransferItem(props) {
  return (
    <div className="transfer-item">
      <div>
        <TransferDate date={props.date} />
      </div>
      <div className="transfer-item__description">
        <h2>{props.title}</h2>
        <div className="transfer-item__price"> ${props.price}M</div>
      </div>
    </div>
  );
}

export default TransferItem;
