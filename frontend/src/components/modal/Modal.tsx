import React from "react";
import { ModalContainer } from "./style";

interface props {
  handleClose: () => void;
  open: boolean;
  children: JSX.Element;
}
const Modal = ({ children, handleClose, open }: props) => {
  return (
    <>
      {open && (
        <ModalContainer>
          <div className="close" onClick={handleClose} />
          {children}
        </ModalContainer>
      )}
    </>
  );
};

export default Modal;
