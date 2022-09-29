import "./App.css";
import { useState } from "react";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { List } from "./components/ListCard";
import { TotalMoney } from "./components/TotalMoney";
import { Main } from "./components/Main";
import { InicialPage } from "./components/InicialPage";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";

function App() {
  const [page, setPage] = useState(false);
  const [listTransactions, setListTransactions] = useState([]);
  function renderPage(set) {
    setPage(set);
  }

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
          <ToastContainer />
        </div>
      ) : (
        <InicialPage setPage={setPage} renderPage={renderPage} />
      )}
    </>
  );
}

export default App;
