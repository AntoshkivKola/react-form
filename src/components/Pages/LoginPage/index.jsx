import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../SignUpPage/SignUpPage.module.scss';

import Header from '../../Header';
import LoginForm from '../../forms/LoginForm';
const LoginPage = props => {
  const onSubmit = (values, formikBag) => {
    formikBag.resetForm();
  };
  return (
    <div className={styles.main}>
      <Header location={props.location} />
      <div className={styles.container}>
        <h1 className={styles.title}>LOGIN TO YOUR ACCOUNT</h1>

        <LoginForm  onSubmit={onSubmit} />
      </div>
    </div>
  );
};

LoginPage.propTypes = {};

export default LoginPage;
