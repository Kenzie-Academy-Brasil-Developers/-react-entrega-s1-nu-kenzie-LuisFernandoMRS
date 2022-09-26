import "./style.css";
import NuKenzie from "./NuKenzie.svg";
export function Header() {
  return (
    <header className="header">
      <img src={NuKenzie} alt="Imagem logo" />
      <button type="button">Inicio</button>
    </header>
  );
}
