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
      page: 'notes',
      notesArr: [], //eslint-disable-line
    };
  }

  onSave = (currentNote) => {
    this.setState((prev) => {
      const notes = prev.notesArr.slice();
      const { text, title } = currentNote;
      if (text !== '' && title !== '') notes.push(currentNote);
      return {
        page: 'saved',
        notesArr: notes,
      };
    });
  }

  handleClick = () => {
    this.setState({ page: 'notes' });
  }

  render() {
    if (this.state.page === 'notes') {
      return (
        <div className="App">
          <Title className="title" titleText="Start taking notes" />
          <Body className="body" onSave={note => this.onSave(note)} />
          <Footer className="about" aboutText="About us" />
        </div>
      );
    }
    return (
      <div className="App">
        <Title className="title" titleText="Saved Notes" />
        <History notes={this.state.notesArr} />
        <Footer className="about" onClick={() => this.handleClick} footerText="Create new note" />
      </div>);
  }
}
export default App;
