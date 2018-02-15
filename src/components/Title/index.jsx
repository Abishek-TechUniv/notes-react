import React from 'react';
import { PropTypes } from 'prop-types';
import './Title.css';

const Title = ({ titleText }) =>
  (
    <header className="Title-header">
      <div>{titleText}</div>
    </header>
  );

Title.defaultProps = {
  titleText: 'Hello',
};

Title.propTypes = {
  titleText: PropTypes.string,
};

export default Title;
