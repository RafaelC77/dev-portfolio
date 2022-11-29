import styled from "styled-components";

export const AboutComponent = styled.section`
  width: 70%;
  max-width: 1080px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 8rem 0;

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

  h3 {
    margin-top: 2rem;
    color: ${(props) => props.theme["green"]};
  }

  @media (max-width: 780px) {
    flex-direction: column-reverse;
  }
`;

export const PictureContainer = styled.div`
  position: relative;
  border-radius: 4px;

  img {
    width: 14rem;
    margin: 0 auto;
    border-radius: 4px;
    box-shadow: -0.625rem 0.625rem ${(props) => props.theme["white"]};
    transition: 0.2s;
  }

  &:hover {
    img {
      box-shadow: 0 0;
    }
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 99%;
    background-color: ${(props) => props.theme["green-dark"]};
    top: 0;
    left: 0;
    border-radius: 4px;
    opacity: 0.2;
  }

  &:hover::after {
    display: none;
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
