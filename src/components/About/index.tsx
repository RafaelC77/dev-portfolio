import profilePic from "../../assets/profile-pic.jpg";
import { Tag } from "../Tag";
import {
  AboutComponent,
  PictureContainer,
  Profile,
  SkillsList,
} from "./styles";

export function About() {
  return (
    <AboutComponent id="about">
      <h2>Sobre mim</h2>

      <Profile>
        <PictureContainer>
          <img src={profilePic} alt="" />
        </PictureContainer>

        <div>
          <p>
            Meu nome é Rafael, desenvolvo aplicações para web utilizando
            principalmente ReactJS. Atualmente, tenho desenvolvido projetos
            relacionados ao Front-end, que incluem e-commerce, dashboard, editor
            de texto. Além disso, também possuo experiência com NodeJS.
          </p>

          <p>
            Possuo formação em direito, porém sempre tive interesse pela área de
            tecnologia, o que me levou a estudar sobre programação. Essa
            experiência contribuiu para melhorar minha capacidade de
            comunicação, de trabalhar em equipe e de lidar com prazos.
          </p>

          <h3>Skills:</h3>

          <SkillsList>
            <li>
              <Tag text="Javascript" />
            </li>
            <li>
              <Tag text="React" />
            </li>
            <li>
              <Tag text="NextJS" />
            </li>
            <li>
              <Tag text="Typescript" />
            </li>
            <li>
              <Tag text="Styled Components" />
            </li>
            <li>
              <Tag text="Chakra UI" />
            </li>
            <li>
              <Tag text="NodeJS" />
            </li>
            <li>
              <Tag text="Redux" />
            </li>
          </SkillsList>
        </div>
      </Profile>
    </AboutComponent>
  );
}
