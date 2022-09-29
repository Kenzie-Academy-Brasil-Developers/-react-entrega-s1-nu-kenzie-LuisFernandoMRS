import "./style.css";
import { useState } from "react";
import { TotalMoney } from "../TotalMoney";
import { ToastContainer, toast } from "react-toastify";
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
    if (description === "" && value === "" && type === "") {
      toast.error("Adicione uma transação", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else if (type === "saída") {
      setListTransactions([
        ...listTransactions,
        {
          description: description,
          type: type,
          value: -value,
        },
      ]);
      toast.success("Saída criada com sucesso", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      setListTransactions([
        ...listTransactions,
        {
          description: description,
          type: type,
          value: value,
        },
      ]);
      toast.success("Entrada criada com sucesso", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
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
                <option selected={true}>Selecione</option>
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
      {listTransactions.length !== 0 ? (
        <TotalMoney listTransactions={listTransactions} />
      ) : (
        <></>
      )}
    </div>
  );
}
