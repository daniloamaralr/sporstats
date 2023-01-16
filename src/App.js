import Transfers from "./components/Transfers";

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
      <h2>Mengão Transfers</h2>
      <Transfers items = {transfers}/>
    </div>  
  );
}

export default App;
