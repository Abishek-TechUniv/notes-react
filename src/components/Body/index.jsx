import React from 'react';
import { PropTypes } from 'prop-types';
import HeadText from '../HeadText/';
import Form from '../Form/';

import './Body.css';

const Body = ({ onSave }) => (
  <article className="Body-article">
    <HeadText title="Insert text here" lang="en" />
    <Form onSave={note => onSave(note)} limit={120} />
  </article>
);


Body.propTypes = {
  onSave: PropTypes.func,
};

Body.defaultProps = {
  onSave: note =>
    alert(`implement function that does something with this:\n ${note}`),
};
export default Body;

