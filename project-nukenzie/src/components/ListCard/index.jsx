import { useState } from "react";
import NoCard from "./NoCard.svg";
import "./style.css";

import { AiFillDelete } from "react-icons/ai";
import { StyledDecoretionCard } from "./style";

export function List({ listTransactions, setListTransactions }) {
  const [listEntryOrExit, setListEntryOrExit] = useState("todos");
  const [list, setFilter] = useState([]);
  function removeCard(removCard) {
    const newList = listTransactions.filter((list) => list !== removCard);
    setListTransactions(newList);
  }

  const listFilter = (listEntry) => {
    const item = listTransactions.filter((list) => {
      return list.type === listEntry || "todos" === listEntry;
    });
    setFilter(item);
  };
  console.log(listTransactions);
  return (
    <>
      <div className="containerListCards">
        <nav className="navCards">
          <h2>Resumo Financeiro </h2>
          <div className="containerButton">
            <button
              className="btnAll"
              onClick={() => {
                listFilter("todos");
                setListEntryOrExit("todos");
              }}
            >
              Todos
            </button>
            <button
              className="btnEntrada"
              onClick={() => {
                listFilter("entrada");
                setListEntryOrExit("entrada");
              }}
            >
              Entradas
            </button>
            <button
              type="button"
              className="btnDespesas"
              onClick={() => {
                listFilter("saída");
                setListEntryOrExit("saída");
              }}
            >
              Despesas
            </button>
          </div>
        </nav>

        {/* Primeira condicional  */}
        {listTransactions.length == 0 ? (
          <ul className="listImgEmpty">
            <li className="ImgEmptycard">
              <p>Você ainda não possui nenhum lançamento</p>
              <img src={NoCard} alt="" className="ImgEmpty" />
            </li>
          </ul>
        ) : listEntryOrExit === "todos" /* Segunda Condicional */ ? (
          <ul className="listCard">
            {listTransactions.map((transaction, index) => {
              return (
                <li key={index} className="card">
                  <StyledDecoretionCard type={transaction.type} />

                  <div className="descriptionCard">
                    <h3>{transaction.description}</h3>
                    <p>{transaction.type}</p>
                  </div>
                  <div className="valueButton">
                    <p>${transaction.value}</p>
                    <button
                      type="button"
                      onClick={() => removeCard(transaction)}
                    >
                      <AiFillDelete />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          /* terceira condicional */
          <ul className="listCard">
            {list.map((transaction, index) => {
              return (
                <li key={index} className="card">
                  <span className="decorationCard"></span>
                  <div className="descriptionCard">
                    <h3>{transaction.description}</h3>
                    <p>{transaction.type}</p>
                  </div>
                  <div className="valueButton">
                    <p>${transaction.value}</p>
                    <button
                      type="button"
                      onClick={() => removeCard(transaction)}
                    >
                      <AiFillDelete />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}
