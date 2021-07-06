import React from 'react';
import PropTypes from 'prop-types';
import Icofont from 'react-icofont';

function SocialIcon({ path, icon }) {
  return (
    <div>
      <a href={path} target="blank" rel="noreferrer noopenner">
        <Icofont icon={icon} />
      </a>
    </div>
  );
}

SocialIcon.propTypes = {
  path: PropTypes.string,
  icon: PropTypes.string
};

export default SocialIcon;
