import styled from "styled-components";

export const InfosPerfil = styled.div`
  width: 37em;
  border-radius: 10px;
  background-color: rgb(15, 15, 15);
  color: #fff;
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  #user_photo {
    width: 8em;
    height: 8em;
    border-radius: 50%;
  }

  h3 {
    color: #9c27b0;
    font-size: 1.6em;
  }

  span {
    font-weight: 300;
    font-size: 0.9em;
  }
  button {
    width: 9em;
    height: 2.8em;
    border: none;
    color: #fff;
    background-color: #9c27b0;
    border-radius: 3px;
    cursor: pointer;
  }

  .infos {
    display: flex;
    flex-direction:column;
    gap: 0.5em;
  }

  #bio {
    display: flex;
    flex-direction: column;
    gap: 0.3em;
    span {
      font-size:1em;
      font-weight: 500;
    }
    p {
      font-weight: 300;
      font-size: 0.9em;
      max-width: 17em;
    }
  }
`;
