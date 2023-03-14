import styled from "styled-components";

export const PostItem = styled.li`
  width: 40%;
  padding: 1em;
  background-color: #fff;
  border-radius: 8px;
  .top {
    display: flex;
    align-items: center;
    gap: 0.8em;
  }
  #perfil_image {
    width: 3em;
    height: 3em;
    object-fit: cover;
    border-radius: 50%;
  }
`;
