import React, { useEffect } from 'react';
import BtnCrissCross from '../BtnCrissCross/BtnCrissCross';
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
    // eslint-disable-next-line
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
      <BtnCrissCross onClick={() => onClose()} className={css.btn} />
      {children}
    </div>
  );
};

MyModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default MyModal;
