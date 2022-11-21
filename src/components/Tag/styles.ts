import styled, { css } from "styled-components";

interface TagProps {
  changeBackground?: boolean;
}

export const TagComponent = styled.div<TagProps>`
  background-color: ${(props) => props.theme["green"]};
  color: ${(props) => props.theme["black"]};
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-weight: 400;
  width: fit-content;
  transition: 0.2s;

  ${(props) =>
    props.changeBackground &&
    css`
      &:hover {
        opacity: 0.7;
      }
    `}
`;
