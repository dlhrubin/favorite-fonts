import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import Nav from './components/Nav';

// Implement stateful App component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exampleText: 'Then came the night of the first falling star.',
      fontSize: '8',
    };
  }

  // Update example text on user input in "Type something" box
  handleChangeExample = (e) => {
    const input = e.target.value.trim();
    const { exampleText } = this.state;
    // Update state only if user input is a non-empty string and different from previous input
    if (input && input !== exampleText) {
      this.setState({
        exampleText: input,
      });
    }
  }

  // Update font size on user input
  handleChangeFontSize = (e) => {
    this.setState({
      fontSize: e.target.value,
    });
  }

  render() {
    const { fontSize } = this.state;
    return (
      <div className="App">
        <header>
          <Header />
          <Nav
            fontSize={fontSize}
            changeExample={this.handleChangeExample}
            changeFontSize={this.handleChangeFontSize}
          />
        </header>
      </div>
    );
  }
}

export default App;
