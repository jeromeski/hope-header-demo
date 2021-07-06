import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Logo = ({ image, classOption }) => {
  return (
    <Link className={`${classOption}`} to={process.env.PUBLIC_URL + '/'}></Link>
  );
};

Logo.propTypes = {
  image: PropTypes.string,
  classOption: PropTypes.string
};

Logo.defaultProps = {
  classOption: 'text-center'
};

export default Logo;
