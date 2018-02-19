import React from 'react';
import { PropTypes } from 'prop-types';
import './HistoryItem.css';

const HistoryItem = ({
  text, titleText, editNote,
}) => (
  <div className="HistoryItem-container">
    <div className="HistoryItem-title">{titleText}</div>
    <div className="HistoryItem-text" onClick={() => editNote()}>{text}
    </div>
  </div>
);

HistoryItem.defaultProps = {
  text: 'Lorem ipsum deloret set ami',
  titleText: 'Default Title',
};

HistoryItem.propTypes = {
  text: PropTypes.string,
  titleText: PropTypes.string,
};

export default HistoryItem;
