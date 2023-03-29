import styled from "styled-components";
import { FlexSection } from "../../styles/Global";

export const Container = styled(FlexSection)``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  border-radius: 1em;
  width: 25em;
  gap: 1em;

  svg {
    font-size: 4.2em;
  }

  h2 {
    font-size: 2em;
    font-weight: 500;
  }

  .icon {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  a {
    color: #7b1fa2;
    transition: 0.2s;
    &:hover {
      color: #7b1fb2;
      text-decoration: underline;
    }
  }

  input[type="submit"] {
    background-color: #7b1fa2;
    height: 2.8em;
    width: 100%;
    color: #fff;
    font-size: 1em;
    border: none;
    font-weight: 300;
    border-radius: 5px;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;
