import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';
import Directions from '../Directions';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLimit: false,
      title: '',
      text: '',
    };
  }

  onTitleChanged = (e) => {
    this.setState({ title: e.target.value });
  }

  onTextChanged = (e) => {
    let newNote = e.target.value;
    if (newNote.length >= this.props.limit) {
      newNote = newNote.slice(0, this.props.limit);
    }

    this.setState({
      isLimit: newNote.length >= this.props.limit,
      text: newNote,
    });
  }

  handleSave = () => {
    this.props.onSave({
      title: this.state.title,
      text: this.state.text,
    });
    if (this.state.title !== '' && this.state.note !== '') {
      this.setState({
        title: '',
        text: '',
        isLimit: false,
      });
    }
  }

  render() {
    return (
      <div>
        <div className="form-container">

          <input
            type="text"
            className="Form-notes-input"
            placeholder="Enter text"
            value={this.state.title}
            onChange={e => this.onTitleChanged(e)}
          />

          <Directions text="Please type your note below" />


          <textarea
            value={this.state.text}
            className={this.state.isLimit ?
              'Form-limit-error Form-notes-area' : 'Form-notes-area'}
            onChange={e => this.onTextChanged(e)}
          />
        </div>

        <div className="Form-details-container">
          <div>
            <button className="Form-save" onClick={this.handleSave}>
              Save
            </button>
          </div>

          <div className="Form-char-count">
            {this.props.limit - this.state.text.length} chars
          </div>
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  onSave: PropTypes.func,
  limit: PropTypes.number,
};

Form.defaultProps = {
  onSave: () => alert('Implement save'),
  limit: 10,
};

export default Form;
