import React from 'react';
import './App.scss';
import Header from './components/Header';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
        <Nav />
      </header>
    </div>
  );
}

export default App;
