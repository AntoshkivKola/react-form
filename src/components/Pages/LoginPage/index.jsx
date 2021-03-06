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
        <h1 className={styles.title}>CREATE AN ACCOUNT</h1>
        <p className={styles.info}>
          We always keep your name and email address private.
        </p>
        <LoginForm onSubmit={onSubmit} />
        <p className={styles.warning}>
          By clicking this button, you agree to our{' '}
          <a href='#'>Terms of Service.</a>
        </p>
      </div>
    </div>
  );
};

LoginPage.propTypes = {};

export default LoginPage;
