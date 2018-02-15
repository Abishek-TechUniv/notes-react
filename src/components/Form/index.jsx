import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLimit: false,
      title: '',
      note: '',
    };

    this.limit = 120;
    Form.propTypes = {
      onSave: PropTypes.func.isRequired,
    };
  }

  onTitleChanged(e) {
    this.setState({ title: e.target.value });
  }

  onTextChanged(e) {
    const newNote = e.target.value;
    if (newNote.length >= this.limit) {
      const slicedNote = newNote.slice(0, this.limit);
      this.setState({ note: slicedNote });
    }

    this.setState({
      isLimit: newNote.length >= this.limit,
      note: newNote,
    });
  }

  render() {
    return (
      <div>
        <div className="form-container">
          <input
            type="text"
            id="note-title-input"
            placeholder="Enter text"
            value={this.state.title}
            onChange={e => this.onTitleChanged(e)}
          />

          <p id="directions-text"><em>Please type your note below</em> &#128203;</p>

          <textarea
            id="notes-area"
            value={this.state.note}
            className={this.state.isLimit ? 'text-limit-error' : ''}
            onChange={e => this.onTextChanged(e)}
          />
        </div>

        <div className="details-container">
          <div>
            <button
              id="save"
              onClick={() => {
                this.props.onSave({
                  title: this.state.title,
                  note: this.state.note,
                });
                this.setState({
                  title: '',
                  note: '',
                  isLimit: false,
                });
              }}
            >
            Save
            </button>
          </div>
          <div id="char-count">{this.limit - this.state.note.length} chars</div>
        </div>
      </div>
    );
  }
}


export default Form;
