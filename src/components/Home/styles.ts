import styled from "styled-components";

export const HomeComponent = styled.section`
  height: calc(100vh - 6rem);
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  h1 {
    font-weight: 400;
    strong {
      font-size: 2rem;
      font-weight: 500;
      color: ${(props) => props.theme["white"]};
    }
  }

  h2 {
    font-size: 4rem;
    font-weight: 400;
    color: ${(props) => props.theme["green"]};
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme["gray"]};
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 3rem;
    }
  }
`;

export const HomeInfo = styled.div`
  width: 60%;

  @media (max-width: 580px) {
    width: min-content;
    padding: 1rem;
  }
`;

export const SocialAccounts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: absolute;
  right: 2rem;
  bottom: 2rem;

  a {
    color: inherit;
    text-decoration: none;
  }

  svg {
    height: 2rem;
    width: 2rem;
    transition: 0.2s;

    &:hover {
      color: ${(props) => props.theme["green"]};
      width: 4rem;
      height: 4rem;
    }
  }
`;

export const ArrowDown = styled.div`
  height: 2rem;
  width: 2rem;
  border-width: 0 3px 3px 0;
  border-style: solid;
  border-color: ${(props) => props.theme["green"]};

  a {
    color: inherit;
    text-decoration: none;
  }

  @keyframes arrowMovement {
    0% {
      bottom: 2.5rem;
      opacity: 1;
    }

    100% {
      bottom: 1rem;
      opacity: 0;
    }
  }

  position: absolute;
  bottom: 1.5rem;
  transform: rotate(45deg);
  animation-name: arrowMovement;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
`;

export const ProjectsButton = styled.button`
  background-color: ${(props) => props.theme["green"]};
  border: none;
  color: ${(props) => props.theme["black"]};
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  margin-top: 2rem;
  font-weight: 400;
`;
