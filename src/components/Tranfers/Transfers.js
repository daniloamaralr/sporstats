import React, { useState } from "react";
import Card from "../UI/Card";
import TransferItem from "./TransferItem";
import TransferFilter from "./TransferFilter";
import "./Transfers.css";

const Transfers = (props) => {
  let transfers = props.items;

  const [filteredYear, setFilteredYear] = useState("2020");

  const selectYearHandler = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="transfers">
        <TransferFilter
          selected={filteredYear}
          onSelectYear={selectYearHandler}
        />
        {transfers.map((transfer) => (
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
