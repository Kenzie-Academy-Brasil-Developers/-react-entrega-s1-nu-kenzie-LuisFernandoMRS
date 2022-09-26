import "./style.css";
import { useState } from "react";
import { TotalMoney } from "../TotalMoney";
export function Form({ listTransactions, setListTransactions }) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setDescription("");
    setType("");
    setValue("");
  }

  function addListTransactions(description, value, type) {
    setListTransactions([
      ...listTransactions,
      {
        description: description,
        type: type,
        value: value,
      },
    ]);
  }

  return (
    <div>
      <div className="containerForm">
        <form className="form" onSubmit={handleSubmit}>
          <label>
            Descrição
            <input
              type="text"
              value={description}
              placeholder="Digite uma descrição"
              onChange={(event) => setDescription(event.target.value)}
            />
            <p>Ex: Compra de roupas</p>
          </label>

          <div className="subForm">
            <label>
              Valor
              <input
                type="text"
                placeholder="R$"
                value={value}
                onChange={(event) => setValue(parseInt(event.target.value))}
              />
            </label>
            <label>
              Tipo do valor
              <select
                value={type}
                onChange={(event) => setType(event.target.value)}
              >
                <option>Selecione</option>
                <option value="entrada">entrada</option>
                <option value="saída">saida</option>
              </select>
            </label>
          </div>
          <button
            type="submit"
            onClick={() => {
              addListTransactions(description, value, type);
            }}
          >
            Inserir Valor
          </button>
        </form>
      </div>
      <TotalMoney />
    </div>
  );
}
