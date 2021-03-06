import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import cx from 'classnames';
import styles from './Input.module.scss';

const Input = ({ name, ...rest }) => {
  return (
    <label className={styles.label}>
      <Field name={name}>
        {({ field, form, meta }) => {
          const classNames = cx(styles.input, {
            [styles.validInput]: meta.touched && !meta.error,
            [styles.errorInput]: meta.touched && meta.error,
          });

          return (
            <input className={classNames} type='text' {...rest} {...field} />
          );
        }}
      </Field>
      <ErrorMessage className={styles.errorMessage} name={name} component='span' />
    </label>
  );
};

Input.propTypes = {};

export default Input;
