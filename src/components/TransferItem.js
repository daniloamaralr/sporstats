import './TransferItem.css';

function TransferItem() {
    const transferDate = new Date(2023, 0, 3);
    const transferTitle = "Gerson - Olympique - Flamengo"
    const transferPrice = 15;

  return (
    <div className="transfer-item">
      <div> {transferDate.toISOString()} </div>
      <div className="transfer-item__description">
        <h2>{transferTitle}</h2>
        <div className="transfer-item__price"> ${transferPrice}M</div>
      </div>
    </div>
  );
}

export default TransferItem;
