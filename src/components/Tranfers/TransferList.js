import TransferItem from "./TransferItem";

import "./TransferList.css";

const TransferList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="transfers-list__fallback">Found no Transfers</h2>;
  }
  return (
    <ul className="transfers-list">
      {props.items.map((transfer) => (
        <TransferItem
          key={transfer.id}
          date={transfer.date}
          title={transfer.title}
          price={transfer.price}
        />
      ))}
    </ul>
  );
};

// const TransferList = (props) => {
//   let transfersContent = <p>No tranfers found</p>;
//   if (props.items.length > 0) {
// transfersContent = props.items.map((transfer) => (
//   <TransferItem
//     key={transfer.id}
//     date={transfer.date}
//     title={transfer.title}
//     price={transfer.price}
//   />
// ));
//   }
//   return <div className="transfersList">{transfersContent}</div>;
// };

export default TransferList;
