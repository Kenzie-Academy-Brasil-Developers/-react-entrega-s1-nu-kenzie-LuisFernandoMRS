import "./style.css";
import Nukenzie from "./NuKenzie.svg";
import illustration from "./illustration.svg";
export function InicialPage({ setPage, renderPage }) {
  return (
    <div className="containerInicialPage">
      <div className="containerLogo">
        <img src={Nukenzie} alt="" className="imgLogo" />
        <h1>Centralize o controle das suas finanças</h1>
        <p>de forma rápida e segura</p>
        <button
          type="button"
          onClick={() => {
            renderPage(true);
          }}
        >
          iniciar
        </button>
      </div>
      <img src={illustration} alt="" className="imgIlustration" />
    </div>
  );
}
