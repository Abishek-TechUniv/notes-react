import React from 'react';
import Title from '../Title';
import Body from '../Body';
import Footer from '../Footer';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notesArr: [], //eslint-disable-line
    };
  }

  onSave = (currentNote) => {
    this.setState((prev) => {
      const notes = prev.notesArr.slice();
      const { note, title } = currentNote;
      if (note !== '' && title !== '') notes.push(currentNote);
      return {
        notesArr: notes,
      };
    });
  }

  render() {
    return (
      <div className="App">
        <Title className="title" titleText="start taking notes" />
        <Body className="body" onSave={note => this.onSave(note)} />
        <Footer className="about" aboutText="About us" />
      </div>
    );
  }
}
export default App;
