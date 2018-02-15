import React from 'react';
import './Form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.limit = 120;
    this.state = {
      isLimit: false,
    };
    this.note = '';
  }

  onTextChanged(e) {
    this.note = e.target.value;

    if (this.note.length >= this.limit) { this.note = this.note.slice(0, this.limit); }

    this.setState({ isLimit: this.note.length >= 120 });
  }

  render() {
    return (
      <div className="form-container">
        <input type="text" id="note-title-input" placeholder="Tasks for today" />

        <p id="directions-text"><em>Please type your note below</em> &#128203;</p>

        <textarea
          id="notes-area"
          value={this.note}
          className={this.state.isLimit ? 'text-limit-error' : ''}
          onChange={e => this.onTextChanged(e)}
        />
      </div>
    );
  }
}


export default Form;
