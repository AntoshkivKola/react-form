import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './SignUpPage.module.scss';
import SignUpForm from '../../forms/SignUpForm';



const SignUpPage = props => {
  const onSubmit = (values, formikBag) => {
    console.log(values);
    console.log(formikBag);
    formikBag.resetForm();
  };


  return (
   <SignUpForm onSubmit={onSubmit}/>
  );
};

SignUpPage.propTypes = {};

export default SignUpPage;