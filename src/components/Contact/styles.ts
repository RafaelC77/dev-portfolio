import styled from "styled-components";

export const ContactComponent = styled.section`
  max-width: 1080px;
  margin: 0 auto;
  padding: 4rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 2rem;
    color: ${(props) => props.theme["green"]};
    text-transform: uppercase;
    margin-bottom: 4rem;
  }

  p {
    margin-bottom: 2rem;
  }

  @media (max-width: 760px) {
    padding: 4rem 2rem;
  }
`;
