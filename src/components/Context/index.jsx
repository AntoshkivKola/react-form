import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar/inedx';
import Header from './Header';


class Context extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Sidebar/>
      </div>
    );
  }
}


Context.propTypes = {

};


export default Context;
