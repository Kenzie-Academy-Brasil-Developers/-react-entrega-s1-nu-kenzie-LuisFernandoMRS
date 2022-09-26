import "./App.css";
import { useState } from "react";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { List } from "./components/ListCard";
import { TotalMoney } from "./components/TotalMoney";
import { Main } from "./components/Main";

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 },
  ]);

  return (
    <>
      <Header />
      <Main>
        <Form
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        >
          {" "}
        </Form>

        <List listTransactions={listTransactions} />
      </Main>
    </>
  );
}

export default App;
