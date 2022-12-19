import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Tag } from "../Tag";
import { HomeComponent, HomeInfo, ArrowDown, SocialAccounts } from "./styles";

export function Home() {
  return (
    <HomeComponent>
      <HomeInfo>
        <h1>
          Olá, me chamo <br /> <strong>Rafael Guimarães.</strong>
        </h1>

        <h2>
          Desenvolvedor <b>Front-end</b>
        </h2>

        <p>
          Meu foco está em construir aplicações e páginas para web com design
          responsivo e acessibilidade.
        </p>

        <a href="#projects">
          <Tag text="Confira meus projetos!" changeBackground={true} />
        </a>
      </HomeInfo>

      <SocialAccounts>
        <a
          href="https://www.linkedin.com/in/rafaelguimaraesdev/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/RafaelC77" target="_blank">
          <FaGithub />
        </a>
      </SocialAccounts>

      <a href="#about">
        <ArrowDown />
      </a>
    </HomeComponent>
  );
}
