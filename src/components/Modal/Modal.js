import React, { useState } from 'react';
import styles from './Modal.module.css';
import Button from '../Button/Button';

const Modal = ({ children, isOpen, onClose, className }) => {
  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    isOpen && (
      <>
        <div className={styles.overlay} onClick={onClose} />
        <div className={`${styles.Modal} ${className}`} onClick={handleClose} data-augmented-ui="tl-clip br-2-clip-xy tr-round border">
          <div className={styles.modalHeader}>
            <Button onClick={onClose}>Close</Button>
          </div>
          <div className={styles.modalContent}>
            {children}
          </div>
        </div>
      </>
    )
  );
};

export default Modal;
