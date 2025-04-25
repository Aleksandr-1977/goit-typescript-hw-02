import css from './ImageModal.module.css';
import React from 'react';
import Modal from 'react-modal';

interface ImageModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  src: string;
  alt: string;
  goToNextImage: () => void;
  goToPreviousImage: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  modalIsOpen,
  closeModal,
  src,
  alt,
  goToNextImage,
  goToPreviousImage,
}) => {
  return (
    <Modal
      className={css.modal}
      overlayClassName={css.overlay}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      appElement={document.getElementById('root') ?? undefined}
    >
      <div className={css.modalContent}>
        <button className={css.prevButton} onClick={goToPreviousImage}>
          &#8592;
        </button>
        <img className={css.modalImg} src={src} alt={alt} />
        <button className={css.nextButton} onClick={goToNextImage}>
          &#8594;
        </button>
      </div>
    </Modal>
  );
};
export default ImageModal;
