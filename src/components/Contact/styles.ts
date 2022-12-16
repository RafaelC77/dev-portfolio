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
    max-width: 30rem;
    text-align: justify;
  }

  @media (max-width: 760px) {
    padding: 4rem 2rem;
  }
`;

export const ContactForm = styled.form`
  max-width: 30rem;
  width: 100%;
  display: flex;
  flex-direction: column;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.5rem;
  }

  div + div {
    margin-top: 1rem;
  }

  label {
    color: ${(props) => props.theme["gray"]};
  }

  span {
    color: ${(props) => props.theme["red"]};
  }

  div > input {
    background-color: transparent;
    color: ${(props) => props.theme["white"]};
    border: none;
    border-bottom: 1px solid ${(props) => props.theme["gray"]};
    padding: 0 0 0.5rem;
    transition: 0.2s;

    &:focus {
      border-bottom: 1px solid ${(props) => props.theme["green"]};
      outline: none;
    }
  }

  div > textarea {
    height: 15rem;
    resize: none;
    background-color: ${(props) => props.theme["black"]};
    color: ${(props) => props.theme["white"]};
    border: 1px solid ${(props) => props.theme["gray"]};
    border-radius: 4px;
    padding: 0.5rem;
    margin-top: 1rem;
    transition: 0.2s;

    &:focus {
      border: 1px solid ${(props) => props.theme["green"]};
      outline: none;
    }
  }

  div > input,
  div > textarea {
    width: 100%;
  }

  button {
    border: none;
    background: transparent;
    cursor: pointer;
    margin-top: 1rem;
    align-self: flex-end;
  }
`;
