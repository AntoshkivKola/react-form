import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import { SIGN_UP_SCHEMA } from 'utils/validationSchemas.js';
import styles from 'components/forms/forms.module.scss';
import Input from 'components/forms/Input';
import { INPUR_RADIO_VALUES } from 'constants.js';
import RadioGroup from 'components/forms/RadioGroup';

const initialValues = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  dispalyName: '',
  passwordConfirmation: '',
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
        <RadioGroup
          name='picked'
          value={INPUR_RADIO_VALUES.BUYER}
          title='Join As a Buyer'
          description='I am looking for a Name, Logo or Tagline for my business, brand or
              product.'
        />
        <RadioGroup
          name='picked'
          value={INPUR_RADIO_VALUES.CREATIVE}
          title='Join As a Creative or Marketplace Seller'
          description='I plan to submit name ideas, Logo designs or sell names in Domain
          Marketplace.'
        />
        <Field className={styles.submit} type='submit' value='Create account' />
      </Form>
    </Formik>
  );
};

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignUpForm;
