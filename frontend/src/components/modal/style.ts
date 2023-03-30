import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  .close {
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100vh;
    position: absolute;
  }
`;
