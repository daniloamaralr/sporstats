import React, { useState } from "react";
import Card from "../UI/Card";
import TransferItem from "./TransferItem";
import TransferFilter from "./TransferFilter";
import "./Transfers.css";

const Transfers = (props) => {
  let transfers = props.items;

  const [filteredYear, setFilteredYear] = useState("2020");

  const selectYearHandler = (selectedYear) => {
    console.log(selectedYear)
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="transfers">
        <TransferFilter
          selected={filteredYear}
          onSelectYear={selectYearHandler}
        />
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
    </div>
  );
};

export default Transfers;
