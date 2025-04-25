import RingLoader from 'react-spinners/RingLoader';

const override = {
  display: 'block',
  margin: '100px auto',
  borderColor: 'green',
};
interface LoaderProps {
  loading: boolean;
}
const Loader = ({ loading }: LoaderProps) => {
  return (
    <div>
      <RingLoader color="#6dc55f" cssOverride={override} loading={loading} />
    </div>
  );
};
export default Loader;
