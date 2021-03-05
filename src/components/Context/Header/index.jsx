import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MyContext } from '../../contexsts';

class Header extends Component {
  render () {
    return (
      <div>
        Header
        <MyContext.Consumer>
          {value => {
            return (
              <>
                <h1>{`${value.firstName}`}</h1>
                <img src={value.imgSrc} alt="user"/>
              </>
            );
          }}
        </MyContext.Consumer>
      </div>
    );
  }
}

Header.propTypes = {};

export default Header;
