import { Tag } from "../Tag";
import projects from "../../data/projectsList";
import {
  LinksContainer,
  ProjectContainer,
  ProjectDescription,
  ProjectsComponent,
} from "./styles";

export function Projects() {
  return (
    <ProjectsComponent id="projects">
      <h2>Meus Projetos</h2>

      <ul>
        {projects.map((project, index) => {
          const isOdd = index % 2;

          return (
            <li key={project.title}>
              <ProjectContainer isOdd={!!isOdd}>
                <img src={project.image} alt="" />

                <ProjectDescription
                  isOdd={!!isOdd}
                  backgroundImage={project.image}
                >
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <ul>
                    {project.techsList.map((tech) => {
                      return <li key={tech}>{tech}</li>;
                    })}
                  </ul>

                  <LinksContainer>
                    <a href={project.githubUrl} target="_blank">
                      <Tag text="Github" changeBackground={true} />
                    </a>

                    <a href={project.pageUrl} target="_blank">
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
