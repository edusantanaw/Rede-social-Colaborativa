import styled from "styled-components";

export const ContactsContainer = styled.div`
  position: fixed;
  right: 0;
  top: 13%;
  background-color: rgb(20, 20, 20);;
  color: #fff;
  display: flex;
  flex-direction: column;
  height: 30em;
  width: 17em;
  border-radius: 20px 0 0 20px;
  z-index: 5;
  img {
    width: 2.6em;
    height: 2.6em;
    border-radius: 50%;
  }

  .search {
    padding: 1em;
    label {
      display: block;
      font-weight: 300;
    }
  }

  li {
    padding: 0.5em 1em;
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 0.5em;
    transition: 0.3s;
    &:hover {
      background-color: rgba(100, 100, 100, 0.1);
    }
  }
`;
