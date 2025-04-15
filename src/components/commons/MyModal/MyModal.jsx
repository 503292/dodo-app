import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './MyModal.module.scss';

const MyModal = ({ isOpen, onClose, children }) => {
  const handleKeyPress = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    if (!isOpen) return;
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={css.modal_overlay}
      onClick={handleBackdropClick}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
    >
      <div className={css.modal_content}>{children}</div>
    </div>
  );
};

MyModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default MyModal;
