import { createPortal } from 'react-dom';

import classes from './Modal.module.scss';

function Backdrop({ onClose }) {
  return (
    <div className={classes.modal__backdrop} onClick={onClose} />
  );
}

function ModalWindow({ children }) {
  return (
    <div className={classes.modal__window}>{children}</div>
  );
}

const portalElement = document.getElementById('overlays');

function Modal({ onClose, children }) {
  return (
    <>
      {createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {createPortal(
        <ModalWindow>{children}</ModalWindow>,
        portalElement
      )}
    </>
  );
}

export default Modal;
