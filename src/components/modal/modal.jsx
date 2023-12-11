import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import styles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import ModalOverlay from '../modal-overlay/modal-overlay';

const modalRoot = document.getElementById("react-modals");

Modal.propTypes = {
  showModal: PropTypes.bool,
  children: PropTypes.element,
  onClose: PropTypes.func
};

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

  return (
    <div>
      {showModal ? ReactDOM.createPortal(
        <ModalOverlay onClose={onClose}>
          <div className={styles.modal}>
            <button className={styles.closeButton} onClick={onClose}>
              <CloseIcon type="primary" />
            </button>
            <div>{children}</div>
          </div>
        </ModalOverlay>,
        modalRoot
      ) : null
      }
    </div>
  )
}

export default Modal;