import React from 'react';
import { PropTypes } from 'prop-types';
import HeadText from '../HeadText/';
import Form from '../Form/';

import './Body.css';

const Body = ({ onSave, text, title }) => (
  <article className="Body-article">
    <HeadText title="Insert text here" lang="en" />
    <Form onSave={note => onSave(note)} title={title} text={text} limit={120} />
  </article>
);


Body.propTypes = {
  onSave: PropTypes.func,
  text: PropTypes.string,
  title: PropTypes.string,
};

Body.defaultProps = {
  onSave: note =>
    console.log(`implement function that does something with this:\n ${note}`),
  text: '',
  title: '',
};
export default Body;

