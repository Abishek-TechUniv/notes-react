import React from 'react';
import Title from '../Title';
import Body from '../Body';
import About from '../About';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notesArr: [],
    };
  }

  onSave(currentNote) {
    this.setState((prev) => {
      const notes = prev.notesArr;
      notes.push(currentNote);
      return {
        notesArr: notes,
      };
    });
  }
  render() {
    return (
      <div className="App">
        <Title className="title" title="start taking notes" />
        <Body className="body" onSave={note => this.onSave(note)} />
        <About className="about" aboutText="About us" />
      </div>
    );
  }
}
export default App;
