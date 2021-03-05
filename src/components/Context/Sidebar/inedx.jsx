import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MyContext } from '../../contexsts';

class Sidebar extends Component {
  render() {
    return (
      <div>
        Sidebar
        <MyContext.Consumer>
          {value => {
            return (
              <>
                <h1>{`${value.firstName} ${value.LastName}`}</h1>
                <img src={value.imgSrc} alt="user"/>
              </>
            );
          }}
        </MyContext.Consumer>
      </div>
    );
  }
}


Sidebar.propTypes = {

};


export default Sidebar;
