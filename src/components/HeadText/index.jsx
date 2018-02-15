import React from 'react';
import { PropTypes } from 'prop-types';

import './HeadText.css';


const HeadText = ({ title, lang }) => (
  <div className="HeadText-container">
    <div className="HeadText-title">{title}</div>
    <div ><button className="HeadText-lang">{lang}</button></div>
  </div>);

HeadText.propTypes = {
  title: PropTypes.string,
  lang: PropTypes.string,
};

HeadText.defaultProps = {
  title: 'Title',
  lang: 'en',
};

export default HeadText;
