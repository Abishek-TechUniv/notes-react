import React from 'react';
import { PropTypes } from 'prop-types';

import HistoryItem from '../HistoryItem';

import './History.css';

const History = ({ notes, editNote }) => {
  const itemsArr = notes.map(note => (
    <HistoryItem
      key={note.key}
      editNote={() => editNote(note.key, note.title, note.text)}
      text={note.text}
      titleText={note.title}
    />
  ));
  return (<div className="History-section">{itemsArr}</div>);
};

History.propTypes = {
  editNote: PropTypes.func.isRequired,
  notes: PropTypes.arrayOf(PropTypes.object),
};

History.defaultProps = {
  notes: [],
};

export default History;
