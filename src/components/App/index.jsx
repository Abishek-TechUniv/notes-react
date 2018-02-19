import React from 'react';
import Title from '../Title';
import Body from '../Body';
import Footer from '../Footer';
import History from '../History';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 0,
      title: '',
      text: '',
      page: 'notes',
      notesArr: [], //eslint-disable-line
    };
  }

  onSave = (currentNote) => {
    this.setState((prev) => {
      const notes = prev.notesArr.slice();
      const { key, text, title } = currentNote;
      if (this.state.key === 0) {
        if (text !== '' && title !== '') notes.push(currentNote);
      } else {
        const myNote = notes.find(x => x.key === this.state.key);
        myNote.text = text;
        myNote.title = title;
        notes[myNote.key] = myNote;
      }
      return {
        page: 'saved',
        notesArr: notes,
        title,
        text,
        key,
      };
    });
  }

  handleClick = () => {
    this.setState({
      key: 0, text: '', title: '', page: 'notes',
    });
  }

  editNote = (key, title, text) => {
    this.setState({
      title,
      text,
      key,
      page: 'notes',
    });
  }

  render() {
    if (this.state.page === 'notes') {
      return (
        <div className="App">
          <Title className="title" titleText="Notes" />
          <Body className="body" text={this.state.text} title={this.state.title} onSave={note => this.onSave(note)} />
          <Footer className="about" aboutText="About us" />
        </div>
      );
    }
    return (
      <div className="App">
        <Title className="title" titleText="Saved Notes" />
        <History
          notes={this.state.notesArr}
          editNote={(key, title, text) => this.editNote(key, title, text)}
        />
        <Footer className="about" onClick={() => this.handleClick} footerText="Create new note" />
      </div>);
  }
}
export default App;
