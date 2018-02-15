import React from 'react';
import { PropTypes } from 'prop-types';
import './Footer.css';

const Footer = ({ footerText }) => (
  <footer>
    <div className="Footer-container">
      <button className="Footer-button">
        {footerText}
      </button>
    </div>
  </footer>
);

Footer.defaultProps = {
  footerText: 'About Us',
};

Footer.propTypes = {
  footerText: PropTypes.string,
};

export default Footer;
