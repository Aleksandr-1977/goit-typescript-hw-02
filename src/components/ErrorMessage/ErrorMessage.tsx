import React from 'react';
import css from './ErrorMessage.module.css';

const Error: React.FC = () => {
  return (
    <p className={css.error}>
      Whoops, something went wrong! Please try reloading this page!
    </p>
  );
};
export default Error;
