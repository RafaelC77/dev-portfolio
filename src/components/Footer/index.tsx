import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FooterComponent } from "./styles";

export function Footer() {
  return (
    <FooterComponent>
      <p>Feito por Rafael Guimarães</p>

      <div>
        <a
          href="https://www.linkedin.com/in/rafaelguimaraesdev/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/RafaelC77" target="_blank">
          <FaGithub />
        </a>
      </div>
    </FooterComponent>
  );
}
