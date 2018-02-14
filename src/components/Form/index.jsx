import React from 'react';
import './Form.css';

const Form = () => (
  <div className="form-container">
    <input type="text" id="note-title-input" placeholder="Tasks for today" />

    <p id="directions-text"><em>Please type your note below</em> &#128203;</p>

    <textarea id="notes-area" />
  </div>
);

export default Form;
