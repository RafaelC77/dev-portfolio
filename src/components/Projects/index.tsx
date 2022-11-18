import { Tag } from "../Tag";
import {
  LinksContainer,
  ProjectContainer,
  ProjectDescription,
  ProjectsComponent,
} from "./styles";

export function Projects() {
  return (
    <ProjectsComponent>
      <h2>Meus Projetos</h2>

      <ProjectContainer>
        <img src="" alt="" />

        <ProjectDescription>
          <h3>Project Title</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            dolorum magni soluta sunt iure? Iure porro itaque nulla ea! Dicta
            iure eos aliquam ipsa id error, in dolore commodi culpa.
          </p>

          <ul>
            <li>React</li>
            <li>Styled Components</li>
            <li>React Hook Form</li>
            <li>Axios</li>
          </ul>

          <LinksContainer>
            <a href="">
              <Tag text="Código fonte" />
            </a>

            <a href="">
              <Tag text="Visitar página" />
            </a>
          </LinksContainer>
        </ProjectDescription>
      </ProjectContainer>
    </ProjectsComponent>
  );
}
