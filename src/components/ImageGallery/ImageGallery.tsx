import { ApiPhoto } from '../../apiService/getAPI';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
import React from 'react';

type Image = ApiPhoto;
export interface ImageGalleryProps {
  images: Image[];
  openModal: (index: number) => void;
  updateModalStateData?: (index: number) => void;
}

const ImageGallery = ({ images, openModal }: ImageGalleryProps) => {
  return (
    <ul className={css.galleryList}>
      {images.map(({ id, alt_description, urls }, index) => (
        <li
          className={css.galleryCard}
          key={id}
          onClick={() => openModal(index)}
        >
          <ImageCard
            urls={urls}
            alt_description={alt_description}
            onClick={() => openModal(index)}
          />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
