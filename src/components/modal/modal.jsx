import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import styles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import ModalOverlay from '../modal-overlay/modal-overlay';

const modalRoot = document.getElementById("react-modals");

function Modal({ showModal, children, onClose }) {
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  return showModal
    ? ReactDOM.createPortal(
        <ModalOverlay onClose={onClose}>
          <div className={styles.modal}>
            <button className={styles.closeButton} onClick={onClose}>
              <CloseIcon type="primary" />
            </button>
            {children}
          </div>
        </ModalOverlay>,
        modalRoot
      )
    : null
}

export default Modal;

Modal.propTypes = {
  showModal: PropTypes.bool,
  children: PropTypes.element,
  onClose: PropTypes.func
};