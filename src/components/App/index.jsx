import React from 'react';
import Title from '../Title';
import Body from '../Body';
import About from '../About';

const App = () =>
  (
    <div className="App">
      <header className="App-header">
        <Title />
        <Body />
        <About />
      </header>
    </div>
  );

export default App;
