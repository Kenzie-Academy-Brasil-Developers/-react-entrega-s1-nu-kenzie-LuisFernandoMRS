import { useState } from "react";
export function List({ listTransactions }) {
  const [listExit, setListExit] = useState([]);
  return (
    <>
      <nav>
        <h2>Resumo Financeiro </h2>
        <div>
          <button>Todos</button>
          <button>Entradas</button>
          <button type="button">Despesas</button>
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
    </>
  );
}
