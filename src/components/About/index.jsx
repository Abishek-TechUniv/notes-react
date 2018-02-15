import React from 'react';
import { PropTypes } from 'prop-types';
import './About.css';

class About extends React.Component {
  constructor(props) {
    super(props);
    About.propTypes = {
      aboutText: PropTypes.string.isRequired,
    };
  }
  render() {
    return (
      <footer>
        <div className="about-container">
          <button id="about-button">
            {this.props.aboutText}
          </button>
        </div>
      </footer>
    );
  }
}

export default About;
