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
      <img src={logo} alt="The letter r underlined" />

      <NavigationMenu>
        <ul>
          <li>
            <a href="" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>

        <button onClick={toggleMenu}>
          <GiHamburgerMenu />
        </button>
      </NavigationMenu>
    </HeaderComponent>
  );
}
