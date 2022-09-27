import "./style.css";
export function TotalMoney({ listTransactions }) {
  const totalValue = listTransactions.reduce((valorAnterior, valorAtual) => {
    return valorAtual.value + valorAnterior;
  }, 0);

  return (
    <div className="containerValue">
      <div className="value">
        <span>Valor total:</span>
        <span className="textValue">$ {totalValue}</span>
      </div>
      <p>O valor se refere ao saldo</p>
    </div>
  );
}
