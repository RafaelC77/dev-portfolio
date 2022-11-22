import styled from "styled-components";

export const AboutComponent = styled.section`
  width: 70%;
  max-width: 1080px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 4rem 0;

  h2 {
    font-size: 2rem;
    text-transform: uppercase;
    margin-top: 4rem;
    color: ${(props) => props.theme["green"]};
  }
`;

export const Profile = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 2rem;

  img {
    width: 14rem;
    height: auto;
    box-shadow: -10px 10px ${(props) => props.theme["white"]};
    margin: 0 auto;
    border-radius: 4px;
  }

  h3 {
    margin-top: 2rem;
    color: ${(props) => props.theme["green"]};
  }

  @media (max-width: 780px) {
    flex-direction: column-reverse;

    img {
      width: 12rem;
    }
  }

  @media (max-width: 480px) {
    img {
      width: 8rem;
    }
  }
`;

export const SkillsList = styled.ul`
  margin-top: 1rem;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
