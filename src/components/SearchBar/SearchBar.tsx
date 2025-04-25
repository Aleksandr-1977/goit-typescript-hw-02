import css from './SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';
import { FcSearch } from 'react-icons/fc';
import { FC, useState, FormEvent, ChangeEvent } from 'react';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}
const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
  const [images, setImages] = useState<string>('');

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setImages(evt.target.value);
  };
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (!images.trim()) {
      toast.error('Введите критерий поиска');
      return;
    }
    onSubmit(images);
    setImages('');
  };
  return (
    <div className={css.container}>
      <header className={css.header}>
        <form className={css.form} onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            // name="images"
            value={images}
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={css.btn} type="submit">
            <FcSearch size="40" />
          </button>
        </form>
      </header>
      <Toaster
        position="top-right"
        toastOptions={{
          className: '',
          style: {
            border: '1px solid #713200',
            padding: '16px',
            color: '#713200',
          },
        }}
      />
    </div>
  );
};
export default SearchBar;
