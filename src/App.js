import React, { useState } from "react";
import NewTransfer from "./components/NewTransfer/NewTransfer";
import Transfers from "./components/Tranfers/Transfers";

const INITIAL_TRANSFERS = [
  {
    id: 1,
    date: new Date(2023, 0, 3),
    title: "Gerson - Olympique - Flamengo",
    price: 15,
  },
  {
    id: 2,
    date: new Date(2022, 6, 18),
    title: "Everton - Benfica - Flamengo",
    price: 14,
  },
  {
    id: 3,
    date: new Date(2022, 6, 29),
    title: "Pulgar - Fiorentina - Flamengo",
    price: 2.8,
  },
  {
    id: 4,
    date: new Date(2023, 0, 1),
    title: "Ayrton Lucas - Spartak Moscou - Flamengo",
    price: 7,
  },
];

const App = () => {
  const [transfers, setTransfers] = useState(INITIAL_TRANSFERS);

  const newTransferHandler = (enteredTransfer) => {
    setTransfers((prevTransfers) => {
      return [...prevTransfers, enteredTransfer];
    });
  };

  return (
    <div>
      <NewTransfer onAddTransfer={newTransferHandler} />
      <Transfers items={transfers} />
    </div>
  );
};

export default App;
