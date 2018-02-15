import React from 'react';
import { PropTypes } from 'prop-types';
import './Title.css';

class Title extends React.Component {
  constructor(props) {
    super(props);
    Title.propTypes = {
      title: PropTypes.string.isRequired,
    };
  }

  render() {
    return (
      <header>
        <div>{this.props.title}</div>
      </header>
    );
  }
}
export default Title;

