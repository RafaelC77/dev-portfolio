import styled from "styled-components";

export const ProjectsComponent = styled.section`
  max-width: 1080px;
  margin: 0 auto;
  padding: 4rem 0;

  h2 {
    font-size: 2rem;
    color: ${(props) => props.theme["green"]};
    text-transform: uppercase;
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  gap: 4rem;
  margin-top: 4rem;

  img {
    width: 25rem;
    height: 30rem;
    background-color: ${(props) => props.theme["green"]};
  }
`;

export const ProjectDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  h3 {
    font-size: 1.5rem;
    color: ${(props) => props.theme["snow"]};
  }

  ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    color: ${(props) => props.theme["gray"]};
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  gap: 1rem;

  a {
    text-decoration: none;
    padding: 0.5rem;
    background-color: ${(props) => props.theme["green"]};
    border-radius: 4px;
  }
`;
