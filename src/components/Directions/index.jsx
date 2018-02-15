import React from 'react';
import { PropTypes } from 'prop-types';

import Emoji from '../Emoji';

const Directions = ({ text }) => (
  <p className="Form-directions-text">
    <em>{`${text} `}</em>
    <Emoji emojiString="📋" />
  </p>
);

Directions.propTypes = {
  text: PropTypes.string,
};

Directions.defaultProps = {
  text: 'Please do some direction',
};
export default Directions;
