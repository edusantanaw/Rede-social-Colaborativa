import styled from "styled-components";

export const PerfilContainer = styled.section`
  padding: 1em 0em;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2em;
  .content {
    width: 60%;
    background-color: #fff;
    border-radius: 10px;
  }

  .photos {
    position: relative;
    height: 24em;
    #user_photo {
      width: 10em;
      height: 10em;
      object-fit: cover;
      position: absolute;
      left: 3em;
      bottom: 0;
      border-radius: 50%;
    }

    #cover_photo {
      width: 100%;
      height: 20em;
      object-fit: cover;
      border-radius: 10px 10px 0px 0px;
    }
  }

  .infos {
    padding: 0.6em 1em;
    h3 {
      font-size: 2em;
      font-weight: 500;
    }
  }

  .posts {
    width: 100%;
      ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2em;
      }
  }
`;
