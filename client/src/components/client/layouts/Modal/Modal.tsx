'use client';
import React from 'react';
import { ModalProps } from './Modal.types';

const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div onClick={handleClose} className="fixed bottom-0 left-0 right-0 top-0 z-20 bg-transparent"></div>
      {children}
    </>
  );
};

export default Modal;
