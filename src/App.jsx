import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';

const DEFAULTS = {
  search: '',
  exampleText: '',
  fontSize: '40',
  darkMode: false,
  grid: true,
  navFull: false,
};

// Implement stateful App component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = DEFAULTS;
  }

  // Add scroll event listener
  componentDidMount() {
    window.scrollTo(0, 0);
    window.addEventListener('scroll', this.handleScroll);
  }

  // Clean up event listeners
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  // Change major nav appearance and scroll to top button visbility on scroll
  handleScroll = (e) => {
    const { navTop } = this.state;
    const scrollTop = (e.target.documentElement.scrollTop || e.target.body.scrollTop);
    if (scrollTop >= navTop) {
      this.setState({
        navFull: true,
      });
    } else {
      this.setState({
        navFull: false,
      });
    }
  }

  // Set top of nav bar for scrolling effects
  setNavTop = (top) => {
    this.setState({
      navTop: top,
      navFull: false,
    });
  }

  // Update search query when user types in search bar
    handleChangeSearch = (e) => {
      const input = e.target.value;
      const { search } = this.state;
      // Scroll to top if input has changed (including whitespace)
      if (input.trim() !== search.trim()) {
        window.scrollTo(0, 0);
      }
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

  // Toggle between dark and light mode
  handleChangeMode = (e, mode) => {
    // Change background color of body on toggle
    if (mode === 'dark') {
      document.body.classList.add('dm-dark');
    } else {
      document.body.classList.remove('dm-dark');
    }
    this.setState({
      darkMode: (mode === 'dark'),
    });
  }

  // Toggle between grid and list layout
  handleToggleLayout = () => {
    const { grid } = this.state;
    this.setState({
      fontSize: grid ? '64' : '40',
      grid: !grid,
    });
  }

  // Reset to display all font cards sorted by popularity with default example text
  handleReset = () => {
    window.scrollTo(0, 0);
    document.body.classList.remove('dm-dark');
    this.setState(DEFAULTS);
  }

  // Scroll to top of page
  handleToTop = () => {
    window.scrollTo(0, 0);
  }

  render() {
    const {
      search, exampleText, fontSize, darkMode, grid, navFull,
    } = this.state;
    return (
      <div className="app" style={{ color: darkMode ? 'white' : '' }}>
        <header>
          <Header darkMode={darkMode} />
          <div className="nav-container">
            <Nav
              query={search}
              example={exampleText}
              fontSize={fontSize}
              darkMode={darkMode}
              grid={grid}
              navFull={navFull}
              setNavTop={this.setNavTop}
              changeSearch={this.handleChangeSearch}
              deleteQuery={this.handleDelete}
              changeExample={this.handleChangeExample}
              changeFontSize={this.handleChangeFontSize}
              toggleLayout={this.handleToggleLayout}
              changeMode={this.handleChangeMode}
              reset={this.handleReset}
              majorNavRef={this.majorNav}
            />
            <div className="nav-placeholder" style={{ position: navFull ? 'relative' : '' }} />
          </div>
        </header>
        <Main
          query={search.trim()}
          example={exampleText.trim()}
          fontSize={fontSize}
          darkMode={darkMode}
          grid={grid}
        />
        <button type="button" className="to-top" onClick={this.handleToTop} style={{ visibility: navFull ? 'visible' : 'hidden', boxShadow: darkMode ? 'none' : '' }}>
          <i className="fas fa-arrow-up" />
        </button>
        <footer>
Coded by Danielle Rubin
          {' '}
          <span style={{ color: 'black' }}>|</span>
          {' '}
2020
          {' '}
          <span style={{ color: 'black' }}>|</span>
          {' '}
Chingu Pre-Work Project
        </footer>
      </div>
    );
  }
}

export default App;
