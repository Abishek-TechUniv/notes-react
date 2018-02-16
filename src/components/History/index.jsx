import React from 'react';
import { PropTypes } from 'prop-types';

import HistoryItem from '../HistoryItem';

import './History.css';

const History = ({ notes }) => {
  const itemsArr = notes.map(note => (
    <HistoryItem key={note.uniqueId} text={note.text} titleText={note.title} />
  ));
  return (<div className="History-section">{itemsArr}</div>);
};

History.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
};

History.defaultProps = {
  notes: [],
};

export default History;
