import React from 'react';
import PropTypes from 'prop-types';
import styles from '../forms.module.scss';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { LOGIN_SCHEMA } from '../../utils/validationSchemas.js';
import Input from '../Input';

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = props => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LOGIN_SCHEMA}
      onSubmit={props.onSubmit}
    >
      <Form className={styles.form}>
        <Input name='email' type='email' placeholder='Email' fullSize={true} />

        <Input
          name='password'
          type='password'
          placeholder='Password'
          fullSize={true}
        />

        <Field className={styles.submit} type='submit' value='Login' />
      </Form>
    </Formik>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
