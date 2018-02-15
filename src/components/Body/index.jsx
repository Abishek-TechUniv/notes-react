import React from 'react';
import { PropTypes } from 'prop-types';
import HeadText from '../HeadText/';
import Form from '../Form/';

import './Body.css';

class Body extends React.Component {
  constructor(props) {
    super(props);
    Body.propTypes = {
      onSave: PropTypes.func.isRequired,
    };
  }

  // onSave(note) {
  //   this.props.onSave(note);
  // }
  render() {
    return (
      <article>
        <HeadText />
        <Form onSave={note => this.props.onSave(note)} />
      </article>
    );
  }
}

export default Body;

