import TransferItem from "./components/TransferItem";

function App() {
  const transfers = [
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
      title: "Ayrton Lucas - Olympique - Flamengo",
      price: 7,
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
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
    </div>
  );
}

export default App;
