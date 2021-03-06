import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = props => {
 
  
  return (
    <header className={styles.header}>
      <img src='https://www.squadhelp.com/img/logo.png' alt='logo'/>
      {props.location.pathname === '/signUp' ? (
        <Link className={styles.link} to='/'>Login</Link>
      ) : (
        <Link className={styles.link} to='/signUp'>Signup</Link>
      )}
    </header>
  );
};

Header.propTypes = {};

export default Header;