import { useState } from "react";
import "./style.css";
export function List({ listTransactions }) {
  const [listExit, setListExit] = useState([]);
  return (
    <>
      <div className="containerListCards">
        <nav className="navCards">
          <h2>Resumo Financeiro </h2>
          <div>
            <button className="btnAll">Todos</button>
            <button className="btnEntrada">Entradas</button>
            <button type="button" className="btnDespesas">
              Despesas
            </button>
          </div>
        </nav>

        <ul>
          {listTransactions.map((transaction, index) => {
            return (
              <li key={index} className="card">
                <h3>{transaction.description}</h3>
                <p>{transaction.type}</p>
                <p>{transaction.value}</p>
                <button type="button">x</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
