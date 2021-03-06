import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { SIGN_UP_SCHEMA } from '../../utils/validationSchemas.js';
import styles from './SignUpForm.module.scss';
import Input from '../Input/index.jsx';

const initialValues = {
  email: '',
  password: '',
};

const SignUpForm = props => {
 
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SIGN_UP_SCHEMA}
      onSubmit={props.onSubmit}
    >
      {formikProps => {
        console.log(formikProps);
        return (
          <Form>
           <Input name="email" />
            <Field name='password' type='password' />
            <ErrorMessage name='password' component='span' />
            <Field type='submit' value='submit' />
          </Form>
        );
      }}
    </Formik>
  );
};

SignUpForm.propTypes = {};

export default SignUpForm;
