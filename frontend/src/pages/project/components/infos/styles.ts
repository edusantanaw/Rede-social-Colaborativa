import styled from "styled-components";

export const InfosContainer = styled.div`
  color: #fff;
  padding: 1em;
  width: 100%;
  .project {
    display: flex;
    padding: 2em;
    color: #fff;
    gap: 2em;
    width: 60%;
    border-radius: 20px;
    img {
      width: 15em;
      border-radius:10px;
    }
    h3 {
      font-size: 2.7em;
      font-weight: 500;
    }

    .desc {
      display: flex;
      flex-direction:column;
      gap: 1em;
    }

    .owner {
      display: flex;
      flex-direction: column;
      gap: 0.5em;
      span {
        font-weight: 300;
      }
    }
  }
`;
