import PropTypes from "prop-types";
import styles from"./ModalOverlay.module.css"

ModalOverlay.propTypes = {
  children: PropTypes.element,
  onClose: PropTypes.func
};

function ModalOverlay({ children, onClose }) {
  const handleClose = (e) => {
      if (e.target === e.currentTarget) {
          onClose();
      }
  };

  return(
    <div className={styles.overlay} onClick={handleClose}>
      {children}
    </div>
  )
}

export default ModalOverlay;