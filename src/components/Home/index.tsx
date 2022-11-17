import { FaLinkedin, FaGithub } from "react-icons/fa";
import {
  HomeComponent,
  HomeInfo,
  ArrowDown,
  ProjectsButton,
  SocialAccounts,
} from "./styles";

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

        <ProjectsButton>Confira meus projetos!</ProjectsButton>
      </HomeInfo>

      <SocialAccounts>
        <a href="">
          <FaLinkedin />
        </a>
        <a href="">
          <FaGithub />
        </a>
      </SocialAccounts>

      <a href="#about">
        <ArrowDown />
      </a>
    </HomeComponent>
  );
}
