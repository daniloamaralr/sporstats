import Card from "./Card"
import TransferItem from "./TransferItem";
import "./Transfers.css"

function Transfers(props) {
  let transfers = props.items;
  return (
    <Card className="transfers">
      <TransferItem
        date={transfers[0].date}
        title={transfers[0].title}
        price={transfers[0].price}
      />
      <TransferItem
        date={transfers[1].date}
        title={transfers[1].title}
        price={transfers[1].price}
      />
      <TransferItem
        date={transfers[2].date}
        title={transfers[2].title}
        price={transfers[2].price}
      />
      <TransferItem
        date={transfers[3].date}
        title={transfers[3].title}
        price={transfers[3].price}
      />
    </Card>
  );
}

export default Transfers;
