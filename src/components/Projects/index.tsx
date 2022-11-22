import { Tag } from "../Tag";
import projects from "../../data/projectsList";
import {
  LinksContainer,
  ProjectContainer,
  ProjectDescription,
  ProjectsComponent,
} from "./styles";

export function Projects() {
  console.log(projects);

  return (
    <ProjectsComponent>
      <h2>Meus Projetos</h2>

      <ul>
        {projects.map((project, index) => {
          const isOdd = index % 2;

          return (
            <li key={project.title}>
              <ProjectContainer isOdd={!!isOdd}>
                <img src="https://source.unsplash.com/random" alt="" />

                <ProjectDescription isOdd={!!isOdd}>
                  <h3>Project Title</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Totam dolorum magni soluta sunt iure? Iure porro itaque
                    nulla ea! Dicta iure eos aliquam ipsa id error, in dolore
                    commodi culpa.
                  </p>

                  <ul>
                    <li>React</li>
                    <li>Styled Components</li>
                    <li>React Hook Form</li>
                    <li>Axios</li>
                  </ul>

                  <LinksContainer>
                    <a href="">
                      <Tag text="Github" changeBackground={true} />
                    </a>

                    <a href="">
                      <Tag text="Visitar página" changeBackground={true} />
                    </a>
                  </LinksContainer>
                </ProjectDescription>
              </ProjectContainer>
            </li>
          );
        })}
      </ul>
    </ProjectsComponent>
  );
}
