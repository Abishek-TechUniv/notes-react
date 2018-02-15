import React from 'react';
import { PropTypes } from 'prop-types';
import './Title.css';

const Title = ({ titleText }) =>
  (
    <div className="Title-header">
      {titleText}
    </div>
  );

Title.defaultProps = {
  titleText: 'Hello',
};

Title.propTypes = {
  titleText: PropTypes.string,
};

export default Title;
