import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import cx from 'classnames';
import styles from './Input.module.scss';

const Input = ({ name,fullSize, ...rest }) => {
  const classNamesLabel = cx(styles.label, {
    [styles.fullSize]: fullSize,
  });
  return (
   
    <label className={classNamesLabel}>
      <Field name={name}>
        {({ field, form, meta }) => {
          const classNames = cx(styles.input, {
            [styles.fullSize]: fullSize,
            [styles.validInput]: meta.touched && !meta.error,
            [styles.errorInput]: meta.touched && meta.error,
          });

          return (
            <input className={classNames} type='text' {...rest} {...field} />
          );
        }}
      </Field>
      <ErrorMessage
        className={styles.errorMessage}
        name={name}
        component='span'
      />
    </label>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  fullSize: PropTypes.bool,

};

export default Input;
