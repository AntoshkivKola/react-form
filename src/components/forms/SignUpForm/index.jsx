import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { SIGN_UP_SCHEMA } from '../../utils/validationSchemas.js';
import styles from '../forms.module.scss';
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
      <Form className={styles.form}>
        <div className={styles.container}>
          <Input name='firstName' type='text' placeholder='First name' />
          <Input name='lastName' type='text' placeholder='Last name' />
        </div>
        <div className={styles.container}>
          <Input name='dispalyName' type='text' placeholder='Display name' />
          <Input name='email' type='email' placeholder='Email' />
        </div>
        <div className={styles.container}>
          <Input name='password' type='password' placeholder='Password' />
          <Input
            name='passwordConfirmation'
            type='password'
            placeholder='Password confirm'
          />
        </div>
        <label className={styles.joinRadioButton}>
          <Field type='radio' name='picked' value='Buyer' />
          <div className={styles.containerRadioButton}>
            <h3>Join As a Buyer</h3>
            <p>
              I am looking for a Name, Logo or Tagline for my business, brand or
              product.
            </p>
          </div>
        </label>
        <label className={styles.joinRadioButton}>
          <Field type='radio' name='picked' value='Creative' />
          <div className={styles.containerRadioButton}>
            <h3>Join As a Creative or Marketplace Seller</h3>
            <p>
              I plan to submit name ideas, Logo designs or sell names in Domain
              Marketplace.
            </p>
          </div>
        </label>
        <Field className={styles.submit} type='submit' value='Create account' />
      </Form>
    </Formik>
  );
};

SignUpForm.propTypes = {};

export default SignUpForm;
