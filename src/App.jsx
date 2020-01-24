import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';

// Implement stateful App component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      exampleText: '',
      fontSize: '8',
    };
  }

    // Note to self: find way to consolidate search and example handle changes to make code more DRY
    // Update search query when user types in search bar
    handleChangeSearch = (e) => {
      // Note: removing "trim()" here for now so that I can set the value of the search input to
      // this state to allow for testing. May change later b/c causes a ton more state changes
      // without trim()...
      const input = e.target.value;
      const { search } = this.state;
      // Update state only if user input is different from previous input
      if (input !== search) {
        this.setState({
          search: input,
        });
      }
    }

    // Delete search query when user clicks delete button
    handleDelete = () => {
      this.setState({
        search: '',
      });
    }

  // Update example text when user types in "Type something" box
  handleChangeExample = (e) => {
    const input = e.target.value.trim();
    const { exampleText } = this.state;
    // Update state only if user input is different from previous input
    if (input !== exampleText) {
      this.setState({
        exampleText: input,
      });
    }
  }

  // Update font size on user input (slider or menu selection)
  handleChangeFontSize = (e, newSize) => {
    this.setState({
      fontSize: newSize || e.target.value,
    });
  }

  render() {
    const { search, exampleText, fontSize } = this.state;
    return (
      <React.StrictMode>
        <div className="App">
          <header>
            <Header />
            <Nav
              query={search}
              fontSize={fontSize}
              changeSearch={this.handleChangeSearch}
              deleteQuery={this.handleDelete}
              changeExample={this.handleChangeExample}
              changeFontSize={this.handleChangeFontSize}
            />
          </header>
          <Main
            query={search}
            example={exampleText}
            fontSize={fontSize}
          />
        </div>
      </React.StrictMode>
    );
  }
}

export default App;
