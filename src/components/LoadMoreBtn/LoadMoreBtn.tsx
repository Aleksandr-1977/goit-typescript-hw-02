import css from './LoadMoreBtn.module.css';
import React from 'react';
interface LoadMoreBtnProps {
  onClick: () => void;
  pages: number;
  totalPages: number;
}
const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({
  onClick,
  pages,
  totalPages,
}) => {
  return (
    <button className={css.btn} type="button" onClick={onClick}>
      Load more{' '}
      <span className={css.span}>
        page {pages}\{totalPages}
      </span>
    </button>
  );
};
export default LoadMoreBtn;
