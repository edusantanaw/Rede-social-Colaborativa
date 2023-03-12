import styled from "styled-components";

export const NavContainer = styled.nav`
  height: 92vh;
  width: 6.8em;
  background-color: #000;
  position: fixed;
  color: #fff;
  ul {
    padding-top: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
  }
  li {
    width: 2.1em;
    height: 2.1em;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4em;
    color: #000;
    background-color: #fff;
    border-radius: 50%;
  }
`;
