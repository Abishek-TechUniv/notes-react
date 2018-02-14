import React from 'react';

const Body = () => (
  <article>
    <input type="text" id="note-title" placeholder="Tasks for today" />

    <h3>Please type your note below</h3>

    <textarea id="notes" />

    <span>
      <button id="save-button">Save</button>
    </span>
    <span>
      150 characters
    </span>
  </article>

);

export default Body;

