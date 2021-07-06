import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Logo = ({ title, classOption }) => {
  return (
    <Link className={`${classOption}`} to={process.env.PUBLIC_URL + '/'}>
      <h2 className="text-light" style={{ display: 'inline-block' }}>
        {title}
      </h2>
    </Link>
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
