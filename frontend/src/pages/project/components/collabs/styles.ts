import styled from "styled-components";

export const CollabContainer = styled.div`
  padding: 1em;
  ul {
    width: 100%;
    display: flex;
    gap: 1em;
    flex-wrap: wrap;

    li {
      background-color: rgb(15, 15, 15);
      padding: 1.5em 1em;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.3em;
      border-radius: 15px;
      span {
        font-size: 1em;
        font-weight: 300;
        color: #fff;
      }
      img {
        width: 5em;
        height: 5em;
        object-fit: cover;
        border-radius: 50%;
      }
    }
  }
`;
