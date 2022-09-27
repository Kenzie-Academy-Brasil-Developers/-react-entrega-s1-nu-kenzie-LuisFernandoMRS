import "./App.css";
import { useState } from "react";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { List } from "./components/ListCard";
import { TotalMoney } from "./components/TotalMoney";
import { Main } from "./components/Main";
import { InicialPage } from "./components/InicialPage";

function App() {
  const [page, setPage] = useState(false);
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 },
  ]);
  function renderPage(set) {
    setPage(set);
  }
  console.log(page);
  return (
    <>
      {page ? (
        <div>
          <Header renderPage={renderPage} />
          <Main>
            <div className="container">
              <Form
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
              >
                {" "}
              </Form>

              <List
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
              />
            </div>
          </Main>
        </div>
      ) : (
        <InicialPage setPage={setPage} renderPage={renderPage} />
      )}
    </>
  );
}

export default App;
