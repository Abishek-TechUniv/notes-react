import React from 'react';
import { PropTypes } from 'prop-types';
import './HistoryItem.css';

const HistoryItem = ({ text, titleText, uniqueId }) => (
  <div className="HistoryItem-container" key={uniqueId}>
    <div className="HistoryItem-title">{titleText}</div>
    <div className="HistoryItem-text">{text}</div>
  </div>
);

HistoryItem.defaultProps = {
  uniqueId: 0,
  text: 'Lorem ipsum deloret set ami',
  titleText: 'Default Title',
};

HistoryItem.propTypes = {
  uniqueId: PropTypes.number,
  text: PropTypes.string,
  titleText: PropTypes.string,
};

export default HistoryItem;
