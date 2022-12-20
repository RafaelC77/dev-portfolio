import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FooterComponent } from "./styles";

export function Footer() {
  return (
    <FooterComponent>
      <p>Feito por Rafael Guimarães</p>

      <div>
        <a
          href="https://www.linkedin.com/in/rafaelguimaraesdev/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/RafaelC77"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:rafael.guimaraes.dev@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <MdEmail />
        </a>
      </div>
    </FooterComponent>
  );
}
