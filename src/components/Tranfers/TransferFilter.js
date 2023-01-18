import React from "react";
import "./TransferFilter.css";

const TransferFilter = (props) => {
  const yearSelectHandler = (event) => {
    props.onSelectYear(event.target.value);
  };

  return (
    <div className="transfers-filter">
      <div className="transfers-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={yearSelectHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default TransferFilter;