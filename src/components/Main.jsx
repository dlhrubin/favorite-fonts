import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import axios from 'axios';
import config from '../testConfig';
import Card from './Card';

// Implement stateful App component
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rendering: true,
      fonts: [],
    };
  }

  // Fetch font information
  componentDidMount() {
    return axios.get(`https://www.googleapis.com/webfonts/v1/webfonts?key=${config.KEY}&sort=popularity`)
      .then((res) => {
        const fonts = res.data.items;
        // Import fonts into index.html
        fonts.forEach((font) => {
          const formattedName = font.family.replace(/\s+/g, '+');
          const defaultVariant = (font.variants.includes('regular')) ? '' : `:${font.variants[0]}`;
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = `https://fonts.googleapis.com/css?family=${formattedName}${defaultVariant}&display=swap`;
          document.head.appendChild(link);
        });
        // Store font information
        this.setState({
          rendering: false,
          fonts,
        });
      })
      .catch((res) => {
        console.log('Error: fonts not loaded');
      });
  }

  render() {
    const { rendering, fonts } = this.state;
    const { query, example, fontSize, darkMode } = this.props;
    // Filter font list based on search query
    const filtered = fonts
      .filter((font) => font.family.toLowerCase().includes(query.toLowerCase()));
    const fontCards = filtered.map((font) => {
      const fontKey = font.family.replace(/\s+/g, '-').toLowerCase();
      const cardComponent = (
        <Card
          key={fontKey}
          name={font.family}
          text={example}
          size={fontSize}
          darkMode={darkMode}
          numStyles={font.variants.length}
        />
      );
        // Lazy load font cards to boost performance when 30 or more cards are present
      return (filtered.length <= 50) ? cardComponent
        : <LazyLoad key={fontKey} placeholder={<div />}>{cardComponent}</LazyLoad>;
    });
    // Display font cards or, if none match the search query, a "No results" page
    const mainDisplay = rendering
      ? (
        <div className="loading-screen">
          <p>Loading fonts...</p>
          <i className="fas fa-spinner fa-pulse" />
        </div>
      ) : fontCards.length ? fontCards : (
        <div className="no-results">
          <span>{'(>_<)'}</span>
          <p>No fonts found!</p>
        </div>
      );
    return (
      <main>
        <p className={darkMode ? "dm-white" : ""} style={{ visibility: rendering ? 'hidden' : 'visible' }}>
Viewing
          {' '}
          <span className={darkMode ? "dm-white" : ""}>{fontCards.length}</span>
          {' '}
of
          {' '}
          {fonts.length}
          {' '}
font families
        </p>
        <div className="font-grid">
          {mainDisplay}
        </div>
      </main>
    );
  }
}

Main.defaultProps = {
  query: '',
  example: '',
  fontSize: '40',
};

Main.propTypes = {
  query: PropTypes.string,
  example: PropTypes.string,
  fontSize: PropTypes.string,
};

export default Main;
