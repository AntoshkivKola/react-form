import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { SIGN_UP_SCHEMA } from '../../utils/validationSchemas.js';
import styles from './SignUpPage.module.scss';

const initialValues = {
  email: '',
  password: '',
};

const SignUpPage = props => {
  const onSubmit = (values, formikBag) => {
    console.log(values);
    console.log(formikBag);
    formikBag.resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={SIGN_UP_SCHEMA} onSubmit={onSubmit}>
      {formikProps => {
        console.log(formikProps);
        return (
          <Form>
            <Field name='email'  />
            <ErrorMessage name='email' component='span'/>
            <Field name='password' type='password' />
            <ErrorMessage name='password' component='span'/>
            <Field type='submit' value='submit' />
          </Form>
        );
      }}
    </Formik>
  );
};

SignUpPage.propTypes = {};

export default SignUpPage;