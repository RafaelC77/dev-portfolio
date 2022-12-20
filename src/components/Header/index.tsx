import { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/logo-portfolio.png";
import { HeaderComponent, NavigationMenu } from "./styles";

export function Header() {
  const previousHeight = useRef(0);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const currentHeight = window.scrollY;

      if (currentHeight > previousHeight.current) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      previousHeight.current = currentHeight;
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function toggleMenu() {
    const menu = document.querySelector("nav ul");

    menu?.classList.toggle("show");
  }

  return (
    <HeaderComponent isHidden={isHidden}>
      <a href="#">
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
