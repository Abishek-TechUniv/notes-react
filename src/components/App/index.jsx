import React from 'react';
import Title from '../Title';
import Body from '../Body';
import About from '../About';
import './App.css';

const App = () =>
  (
    <div className="App">
      <Title className="title" title="start taking notes" />
      <Body className="body" />
      <About className="about" />
    </div>
  );

export default App;
