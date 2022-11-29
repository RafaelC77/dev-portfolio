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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum at
            voluptatum nihil impedit quod consequuntur ad veniam nobis harum
            architecto cupiditate consectetur illo necessitatibus, aut
            exercitationem laudantium unde, quas vel? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Natus recusandae ipsam cum commodi!
            Eveniet esse exercitationem nobis, ipsa dignissimos nemo molestiae
            non minima, rem dolor, ipsam id ad velit tenetur?
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
          </SkillsList>
        </div>
      </Profile>
    </AboutComponent>
  );
}
