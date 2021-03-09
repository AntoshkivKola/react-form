import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = props => {
  return (
    <header className={styles.header}>
      <Link to='/'>
        <img src='https://www.squadhelp.com/img/logo.png' alt='logo' />
      </Link>
      {props.location.pathname === '/signUp' ? (
        <Link className={styles.link} to='/'>
          Login
        </Link>
      ) : (
        <Link className={styles.link} to='/signUp'>
          Signup
        </Link>
      )}
    </header>
  );
};

Header.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Header;
