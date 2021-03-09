import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Header';
import styles from 'Pages/Pages.module.scss';
import SignUpForm from 'components/forms/SignUpForm';

const SignUpPage = props => {
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
        <SignUpForm onSubmit={onSubmit} />
        <p className={styles.warning}>
          By clicking this button, you agree to our{' '}
          <a href='#'>Terms of Service.</a>
        </p>
      </div>
    </div>
  );
};

SignUpPage.propTypes = {};

export default SignUpPage;
