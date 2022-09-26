import "./style.css";
export function TotalMoney({ listTransactions }) {
  return (
    <div className="containerValue">
      <div className="value">
        <span>Valor total:</span>
        <span className="textValue">$ 8456</span>
      </div>
      <p>O valor se refere ao saldo</p>
    </div>
  );
}
