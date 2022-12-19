import { GiHamburgerMenu } from "react-icons/gi";
import { HeaderComponent, NavigationMenu } from "./styles";
import logo from "../../assets/logo-portfolio.png";

export function Header() {
  function toggleMenu() {
    const menu = document.querySelector("nav ul");

    menu?.classList.toggle("show");
  }

  return (
    <HeaderComponent>
      <a href="/">
        <img src={logo} alt="The letter r underlined" />
      </a>

      <NavigationMenu>
        <ul>
          <li>
            <a href="#" className="active" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={toggleMenu}>
              Sobre
            </a>
          </li>
          <li>
            <a href="#projects" onClick={toggleMenu}>
              Projetos
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>
              Contato
            </a>
          </li>
        </ul>

        <button onClick={toggleMenu}>
          <GiHamburgerMenu />
        </button>
      </NavigationMenu>
    </HeaderComponent>
  );
}
