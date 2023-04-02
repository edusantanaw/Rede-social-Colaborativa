import styled from "styled-components";
import { FlexSection } from "../../styles/Global";

export const Container = styled(FlexSection)`
  background-color: rgb(25, 25, 25);
  justify-content: space-evenly;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  border-radius: 1em;
  width: 25em;
  gap: 1em;
  color: #fff;
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
    color: #d84f53;
    transition: 0.2s;
    &:hover {
      color: #d84f5c;
      text-decoration: underline;
    }
  }

  input[type="submit"] {
    background-color: #d84f53;
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
