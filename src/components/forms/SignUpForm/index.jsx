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
            <Input name='email' type='email' placeholder='Email' />
            <Input name='password' type='password' placeholder='Password'/>
            <Input name='passwordConfirmation' type='password' placeholder='Password confirm'/>
            <Field type='submit' value='submit' />
          </Form>
        );
      }}
    </Formik>
  );
};

SignUpForm.propTypes = {};

export default SignUpForm;
