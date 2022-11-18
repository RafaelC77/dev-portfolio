import styled from "styled-components";

export const TagComponent = styled.div`
  background-color: ${(props) => props.theme["green"]};
  color: ${(props) => props.theme["black"]};
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-weight: 400;
  width: fit-content;
`;
