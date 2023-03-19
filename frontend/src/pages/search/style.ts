import styled from "styled-components";

export const SearchContainer = styled.section`
  width: 100%;
  padding-top: 5.5em;
  display: flex;
  flex-direction: column;
  align-items: center;

  .top {
    width: 40%;
    border-bottom: 1px solid #000;
    display: flex;
    justify-content: center;
    margin-bottom: 1em;
    gap: 1em;
    padding-bottom: 0.4em;
    span {
      font-size: 1.3em;
      font-weight: 500;
    }
  }

  ul{
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 1em;
}
`;
