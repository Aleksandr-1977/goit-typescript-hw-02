import css from './ImageCard.module.css';
interface ImageCardProps {
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
  onClick: () => void;
}
const ImageCard = ({ alt_description, urls, onClick }: ImageCardProps) => {
  return (
    <div className={css.card} onClick={onClick}>
      <img className={css.cardImage} src={urls.small} alt={alt_description} />
    </div>
  );
};
export default ImageCard;
