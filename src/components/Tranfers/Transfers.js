import React, { useState } from "react";
import Card from "../UI/Card";
import TransferFilter from "./TransferFilter";
import TransferList from "./TransferList";
import TransferChart from "./TransferChart";
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

  return (
    <div>
      <Card className="transfers">
        <TransferFilter
          selected={filteredYear}
          onSelectYear={selectYearHandler}
        />
        <TransferChart transfers={filteredTransfers}></TransferChart>
        {<TransferList items={filteredTransfers}/>}
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
