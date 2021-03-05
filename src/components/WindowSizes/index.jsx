import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WindowSizes extends Component {
  constructor (props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
    };
  }

  getSizes = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  componentDidMount () {
    window.addEventListener('resize', this.getSizes);
    this.getSizes();
  }


  render () {
    const { width, height } = this.state;
    return (
      <div>
        current width: {width}
        <br />
        current height: {height}
      </div>
    );
  }
}

WindowSizes.propTypes = {};

export default WindowSizes;
