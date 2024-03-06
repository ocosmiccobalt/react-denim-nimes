import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

import classes from './Modal.module.scss';

function Modal({ open, onClose, children }) {
  const modal = useRef();

  useEffect(() => {
    const dialog = modal.current;

    if (open) {
      dialog.showModal();
    }

    return () => dialog.close();
  }, [open]);

  const portalElement = document.getElementById('overlays');

  return createPortal(
    <dialog className={classes.modal} ref={modal} onClose={onClose}>
      <div className={classes.modal__content}>
        {children}
      </div>
    </dialog>,
    portalElement
  );
}

export default Modal;
