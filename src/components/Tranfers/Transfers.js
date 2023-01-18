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

  const filteredTransfers = props.items.filter(transfer => {
    return transfer.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="transfers">
        <TransferFilter
          selected={filteredYear}
          onSelectYear={selectYearHandler}
        />
        {filteredTransfers.map((transfer) => (
          <TransferItem
            key={transfer.id}
            date={transfer.date}
            title={transfer.title}
            price={transfer.price}
          />
        ))}
      </Card>
    </div>
  );
};

export default Transfers;
