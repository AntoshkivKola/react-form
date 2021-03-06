import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar/inedx';


class Context extends Component {
  render() {
    return (
      <div>
       
        <Sidebar/>
      </div>
    );
  }
}


Context.propTypes = {

};


export default Context;
