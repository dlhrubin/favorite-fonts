import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import config from '../config';
import Card from './Card';

// Implement stateful App component
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fonts: [],
    };
  }

  // Fetch font information
  componentDidMount() {
    return axios.get(`https://www.googleapis.com/webfonts/v1/webfonts?key=${config.KEY}&sort=popularity`)
      .then((res) => {
        // Import fonts into index.html
        res.data.items.forEach((font) => {
          const formattedName = font.family.replace(/\s+/g, '+')
          const defaultVariant = (font.variants.includes("regular")) ? "" : ":" + font.variants[0];
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = "https://fonts.googleapis.com/css?family=" + formattedName + defaultVariant + "&display=swap";
          document.head.appendChild(link);
        })
        // Store font information
        this.setState({
          fonts: res.data.items,
        });
      })
      .catch((res) => {
        console.log('Error: fonts not loaded');
      });
  }

  render() {
    const { fonts } = this.state;
    const { example, fontSize } = this.props;
    const fontCards = fonts.map((font) => <Card key={font.family.replace(/\s+/g, '-').toLowerCase()} name={font.family} text={example} size={fontSize} numStyles={font.variants.length}/>);
    return (
      <main>
        <p>
Viewing
          {' '}
          <span>{fontCards.length}</span>
          {' '}
of
          {' '}
          {fonts.length}
          {' '}
font families
        </p>
        <div className="font-grid">
          {fontCards}
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
