import profilePic from "../../assets/profile-pic.jpg";
import { AboutComponent, Profile, SkillsList } from "./styles";

export function About() {
  return (
    <AboutComponent id="about">
      <h2>Sobre mim</h2>

      <Profile>
        <img src={profilePic} alt="" />

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
            <li>Javascript</li>
            <li>React</li>
            <li>NextJS</li>
            <li>Typescript</li>
            <li>Styled Components</li>
            <li>Chakra UI</li>
          </SkillsList>
        </div>
      </Profile>
    </AboutComponent>
  );
}
