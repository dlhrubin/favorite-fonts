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
    const fontCards = fonts.map((font) => <Card key={font.family} name={font.family} text={example} size={fontSize} styles={font.variants} />);
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
