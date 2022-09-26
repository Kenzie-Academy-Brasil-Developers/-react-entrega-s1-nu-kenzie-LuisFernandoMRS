import "./style.css";
import { useState } from "react";
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
    <form className="form" onSubmit={handleSubmit}>
      <label>Descrição</label>

      <input
        type="text"
        value={description}
        placeholder="Digite uma descrição"
        onChange={(event) => setDescription(event.target.value)}
      />
      <div>
        <label>Valor</label>
        <input
          type="text"
          placeholder="R$"
          value={value}
          onChange={(event) => setValue(parseInt(event.target.value))}
        />
        <label>Tipo do valor</label>
        <select value={type} onChange={(event) => setType(event.target.value)}>
          <option>Selecione</option>
          <option value="entrada">entrada</option>
          <option value="saída">saida</option>
        </select>
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
  );
}
