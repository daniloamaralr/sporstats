import React, { useState } from "react";
import Card from "../UI/Card";
import TransferItem from "./TransferItem";
import TransferFilter from "./TransferFilter";
import "./Transfers.css";

const Transfers = (props) => {
  //let transfers = props.items;

  const [filteredYear, setFilteredYear] = useState("2023");

  const selectYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredTransfers = props.items.filter((transfer) => {
    return transfer.date.getFullYear().toString() === filteredYear;
  });

  let transfersContent = <p>No tranfers found</p>;
  if (filteredTransfers.length > 0) {
    transfersContent = filteredTransfers.map((transfer) => (
      <TransferItem
        key={transfer.id}
        date={transfer.date}
        title={transfer.title}
        price={transfer.price}
      />
    ));
  }

  return (
    <div>
      <Card className="transfers">
        <TransferFilter
          selected={filteredYear}
          onSelectYear={selectYearHandler}
        />
        {transfersContent}
        {/* {filteredTransfers.length === 0 && <p>No tranfers found</p>}
        {filteredTransfers.length > 0 && filteredTransfers.length === 0 ? (
          <p>No tranfers found</p>
        ) : (
          filteredTransfers.map((transfer) => (
            <TransferItem
              key={transfer.id}
              date={transfer.date}
              title={transfer.title}
              price={transfer.price}
            />
          ))
        )} */}
        {/* {filteredTransfers.length === 0 ? (
          <p>No tranfers found</p>
        ) : (
          filteredTransfers.map((transfer) => (
            <TransferItem
              key={transfer.id}
              date={transfer.date}
              title={transfer.title}
              price={transfer.price}
            />
          ))
        )} */}
      </Card>
    </div>
  );
};

export default Transfers;
