import "./style.css";
import NuKenzie from "./NuKenzie.svg";
export function Header({ renderPage }) {
  return (
    <header className="header">
      <div className="containerHeader">
        <img src={NuKenzie} alt="Imagem logo" />
        <button
          type="button"
          onClick={() => {
            renderPage(false);
          }}
        >
          Inicio
        </button>
      </div>
    </header>
  );
}
