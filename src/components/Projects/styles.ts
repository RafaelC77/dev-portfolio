import styled from "styled-components";

interface ProjectProps {
  isOdd: boolean;
}

export const ProjectsComponent = styled.section`
  max-width: 1080px;
  margin: 0 auto;
  padding: 4rem 0;

  h2 {
    font-size: 2rem;
    color: ${(props) => props.theme["green"]};
    text-transform: uppercase;
  }

  ul {
    list-style: none;
  }
`;

export const ProjectContainer = styled.div<ProjectProps>`
  display: flex;
  flex-direction: ${(props) => (props.isOdd ? "row-reverse" : "row")};
  gap: 4rem;
  margin-top: 4rem;

  img {
    width: 25rem;
    height: 30rem;
    object-fit: cover;
    border-radius: 4px;
  }
`;

export const ProjectDescription = styled.div<ProjectProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => (props.isOdd ? "flex-start" : "flex-end")};
  gap: 1rem;
  text-align: ${(props) => (props.isOdd ? "start" : "end")};

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
`;
