import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import styles from './RadioGroup.module.scss';

const RadioGroup = props => {
  const { name, value, title, description } = props;
  return (
    <label className={styles.joinRadioButton}>
      <Field type='radio' name={name} value={value} />
      <div className={styles.containerRadioButton}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </label>
  );
};

RadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default RadioGroup;
