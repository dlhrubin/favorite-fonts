import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';

const DEFAULTS = {
  search: '',
  exampleText: '',
  fontSize: '40',
};

// Implement stateful App component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = DEFAULTS;
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
    const input = e.target.value;
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

  // Reset to display all font cards sorted by popularity with default example text
  handleReset = () => {
    this.setState(DEFAULTS);
  }

  // Scroll to top of page
  handleToTop = () => {
    window.scrollTo(0,0);
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
              example={exampleText}
              fontSize={fontSize}
              changeSearch={this.handleChangeSearch}
              deleteQuery={this.handleDelete}
              changeExample={this.handleChangeExample}
              changeFontSize={this.handleChangeFontSize}
              reset={this.handleReset}
            />
          </header>
          <Main
            query={search.trim()}
            example={exampleText.trim()}
            fontSize={fontSize}
          />
          <button className="to-top" onClick={this.handleToTop}>
            <i className="fas fa-arrow-up"></i>
          </button>
        </div>
      </React.StrictMode>
    );
  }
}

export default App;
