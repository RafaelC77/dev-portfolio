import styled from "styled-components";

export const HeaderComponent = styled.header`
  height: 6rem;
  padding: 0 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    height: 3rem;
  }
  @media (max-width: 992px) {
    padding: 0 2rem;
  }
  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

export const NavigationMenu = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    li {
      position: relative;
    }
    li > a {
      text-decoration: none;
      color: inherit;
      text-transform: uppercase;
      font-size: 1.25rem;
      transition: 0.2s ease-in;
      &::after {
        content: "";
        width: 0;
        height: 2px;
        background-color: ${(props) => props.theme["green"]};
        position: absolute;
        top: 100%;
        left: 0;
        transition: 0.2s ease-in;
      }
      &:hover::after,
      &.active::after {
        width: 100%;
      }
      &:hover,
      &.active {
        color: ${(props) => props.theme["green"]};
      }
    }
  }
  button {
    background: transparent;
    border: none;
    cursor: pointer;
    display: none;
    svg {
      height: 2rem;
      width: 2rem;
      color: ${(props) => props.theme["gray-light"]};
    }
  }
  @media (max-width: 560px) {
    button {
      display: block;
    }
    ul {
      flex-direction: column;
      position: fixed;
      top: 6rem;
      right: -11rem;
      align-items: flex-end;
      gap: 0;
      background-color: ${(props) => props.theme["black"]};
      border: 2px solid ${(props) => props.theme["gray-light"]};
      z-index: 999;
      transition: 0.2s ease-in;
      li {
        padding: 0.5rem 2rem;
        width: 100%;
        text-align: right;
      }
      li + li {
        border-top: 2px solid ${(props) => props.theme["gray-light"]};
      }
      li > a:hover::after,
      li > a.active::after {
        width: 0;
      }
    }
    ul.show {
      right: 0;
    }
  }
`;
