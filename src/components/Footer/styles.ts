import styled from "styled-components";

export const FooterComponent = styled.footer`
  padding: 2rem 0;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  svg {
    height: 1.5rem;
    width: 1.5rem;
  }

  a + a {
    margin-left: 1rem;
  }
`;
